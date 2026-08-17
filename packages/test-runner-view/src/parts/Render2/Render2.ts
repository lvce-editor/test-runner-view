import { ViewletCommand } from '@lvce-editor/constants'
import { getTestRunnerVirtualDom } from '../GetTestRunnerVirtualDom/GetTestRunnerVirtualDom.ts'
import * as TestRunnerStates from '../TestRunnerStates/TestRunnerStates.ts'

export const render2 = (id: number, diffResult: readonly number[]): readonly unknown[] => {
  const { newState } = TestRunnerStates.get(id)
  TestRunnerStates.set(id, newState, newState)
  if (diffResult.length === 0) {
    return []
  }
  return [[ViewletCommand.SetDom2, id, getTestRunnerVirtualDom(newState.testFiles)]]
}
