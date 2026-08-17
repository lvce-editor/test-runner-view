import { WebWorkerRpcClient } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { commandMap } from '../CommandMap/CommandMap.ts'
import { registerCommands } from '../TestRunnerStates/TestRunnerStates.ts'

export const main = async (): Promise<void> => {
  registerCommands(commandMap)
  const rpc = await WebWorkerRpcClient.create({ commandMap })
  RendererWorker.set(rpc)
}
