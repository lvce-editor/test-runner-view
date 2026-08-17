import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'test-runner.discovers-test-files'

export const skip = 1

export const test: Test = async ({ expect, FileSystem, Locator, SideBar, Workspace }) => {
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/sample.test.ts`, 'export const value = 1')
  await Workspace.setPath(tmpDir)

  await SideBar.open('Test Runner')

  const testItems = Locator('.TestRunnerItem')
  await expect(testItems).toHaveCount(1)
  await expect(testItems.first()).toHaveText('sample.test.ts')
}
