import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { handleRun } from '../src/parts/HandleRun/HandleRun.ts'

test('shows a not implemented message', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ConfirmPrompt.showErrorMessage': async () => true,
  })
  const state = {
    id: 1,
    rendered: true,
    testFiles: [],
    workspacePath: 'file:///workspace',
  }

  const result = await handleRun(state, 'file:///workspace/example.test.ts')

  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([
    [
      'ConfirmPrompt.showErrorMessage',
      {
        message: 'Not Implemented',
      },
    ],
  ])
})
