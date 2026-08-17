import pluginTypeScript from '@babel/preset-typescript'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { join } from 'node:path'
import { rollup, type OutputOptions, type RollupOptions } from 'rollup'
import { root } from './root.ts'

const output: OutputOptions = {
  file: join(root, '.tmp/dist/dist/testRunnerWorkerMain.js'),
  format: 'es',
  freeze: false,
  generatedCode: {
    constBindings: true,
    objectShorthand: true,
  },
}

const options: RollupOptions = {
  input: join(root, 'packages/test-runner-view/src/testRunnerWorkerMain.ts'),
  preserveEntrySignatures: 'strict',
  treeshake: {
    propertyReadSideEffects: false,
  },
  output,
  external: ['electron', 'ws'],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [pluginTypeScript],
    }),
    nodeResolve(),
  ],
}

export const bundleJs = async (): Promise<void> => {
  const input = await rollup(options)
  await input.write(output)
}
