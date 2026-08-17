import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'test-runner.empty'

export const skip = 1

export const test: Test = async ({ expect, FileSystem, Locator, SideBar, Workspace }) => {
  const tmpDir = await FileSystem.getTmpDir()
  await Workspace.setPath(tmpDir)

  await SideBar.open('Test Runner')

  const testRunner = Locator('.TestRunner')
  await expect(testRunner).toBeVisible()
  await expect(testRunner.locator('.TestRunnerItem')).toHaveCount(0)
}
