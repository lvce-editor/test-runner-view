import type { TestRunnerState } from '../TestRunnerState/TestRunnerState.ts'
import * as TestRunnerStates from '../TestRunnerStates/TestRunnerStates.ts'

export const create2 = (
  id: number,
  _uri: string,
  _x: number,
  _y: number,
  _width: number,
  _height: number,
  workspacePath: string,
  _platform: number,
  _assetDir: string,
): void => {
  const initialState: TestRunnerState = { id, rendered: false, testFiles: [], workspacePath }
  const renderedState: TestRunnerState = { ...initialState, rendered: true }
  TestRunnerStates.set(id, renderedState, initialState)
}
