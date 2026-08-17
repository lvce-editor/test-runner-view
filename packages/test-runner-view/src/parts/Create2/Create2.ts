import type { TestRunnerState } from '../TestRunnerState/TestRunnerState.ts'
import * as TestRunnerStates from '../TestRunnerStates/TestRunnerStates.ts'

export const create2 = (id: number): void => {
  const initialState: TestRunnerState = { id, rendered: false }
  const renderedState: TestRunnerState = { id, rendered: true }
  TestRunnerStates.set(id, renderedState, initialState)
}
