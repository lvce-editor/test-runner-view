import { execa } from 'execa'
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { bundleJs } from './bundleJs.ts'
import { root } from './root.ts'

const dist = join(root, '.tmp', 'dist')

const getVersion = async (): Promise<string> => {
  const environmentVersion = process.env.RG_VERSION || process.env.GIT_TAG
  if (environmentVersion) {
    return environmentVersion.startsWith('v') ? environmentVersion.slice(1) : environmentVersion
  }
  const { exitCode, stdout } = await execa('git', ['describe', '--exact-match', '--tags'], { reject: false })
  if (exitCode !== 0) {
    return '0.0.0-dev'
  }
  return stdout.startsWith('v') ? stdout.slice(1) : stdout
}

await rm(dist, { force: true, recursive: true })
await mkdir(join(dist, 'dist'), { recursive: true })
await bundleJs()

const packageJsonPath = join(root, 'packages', 'test-runner-view', 'package.json')
const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'))
delete packageJson.devDependencies
delete packageJson.jest
delete packageJson.scripts
packageJson.main = 'dist/testRunnerWorkerMain.js'
packageJson.version = await getVersion()

await writeFile(join(dist, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
await cp(join(root, 'README.md'), join(dist, 'README.md'))
await cp(join(root, 'LICENSE'), join(dist, 'LICENSE'))
