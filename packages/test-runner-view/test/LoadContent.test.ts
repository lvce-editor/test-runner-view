import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

test('loads test files from the workspace', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.glob': async () => ['file:///workspace/first.test.ts', 'file:///workspace/src/second.test.ts', 'C:\\workspace\\third.test.ts'],
  })
  const state = {
    id: 1,
    rendered: true,
    testFiles: [],
    workspacePath: 'file:///workspace',
  }

  const result = await loadContent(state)

  expect(result).toEqual({
    ...state,
    testFiles: [
      { name: 'first.test.ts', uri: 'file:///workspace/first.test.ts' },
      { name: 'second.test.ts', uri: 'file:///workspace/src/second.test.ts' },
      { name: 'third.test.ts', uri: 'C:\\workspace\\third.test.ts' },
    ],
  })
  expect(mockRpc.invocations).toEqual([['FileSystem.glob', 'file:///workspace', '**/*.test.ts']])
})
