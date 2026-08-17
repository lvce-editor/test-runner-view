import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { TestFile } from '../TestRunnerState/TestRunnerState.ts'
import { getTestFileVirtualDom } from '../GetTestFileVirtualDom/GetTestFileVirtualDom.ts'

export const getTestRunnerVirtualDom = (testFiles: readonly TestFile[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: testFiles.length,
      className: mergeClassNames('Viewlet', 'TestRunner', 'Tree'),
      type: VirtualDomElements.Div,
    },
    ...testFiles.flatMap(getTestFileVirtualDom),
  ]
}
