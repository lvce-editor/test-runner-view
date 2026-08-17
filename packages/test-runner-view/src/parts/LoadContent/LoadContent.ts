import type { TestRunnerState } from '../TestRunnerState/TestRunnerState.ts'
import * as FileSystem from '../FileSystem/FileSystem.ts'
import { getFileName } from '../GetFileName/GetFileName.ts'

const testFileGlob = '**/*.test.ts'

export const loadContent = async (state: TestRunnerState): Promise<TestRunnerState> => {
  const { workspacePath } = state
  const uris = await FileSystem.glob(workspacePath, testFileGlob)
  const testFiles = uris.map((uri) => ({ name: getFileName(uri), uri }))
  return {
    ...state,
    testFiles,
  }
}
