import { RendererWorker } from '@lvce-editor/rpc-registry'

export const glob = async (root: string, pattern: string): Promise<readonly string[]> => {
  return RendererWorker.invoke('FileSystem.glob', root, pattern)
}
