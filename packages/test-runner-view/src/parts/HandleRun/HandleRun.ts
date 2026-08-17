import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { TestRunnerState } from '../TestRunnerState/TestRunnerState.ts'

export const handleRun = async (state: TestRunnerState, _uri: string): Promise<TestRunnerState> => {
  await RendererWorker.invoke('ConfirmPrompt.showErrorMessage', {
    message: 'Not Implemented',
  })
  return state
}
