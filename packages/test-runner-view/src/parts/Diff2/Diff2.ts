import * as TestRunnerStates from '../TestRunnerStates/TestRunnerStates.ts'

export const diff2 = (id: number): readonly number[] => {
  const { newState, oldState } = TestRunnerStates.get(id)
  return oldState.rendered === newState.rendered ? [] : [1]
}
