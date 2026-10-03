import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { TestFile } from '../TestRunnerState/TestRunnerState.ts'
import { getTestFileVirtualDom } from '../GetTestFileVirtualDom/GetTestFileVirtualDom.ts'

const testRunnerClassName = mergeClassNames('Viewlet', 'TestRunner', 'Tree')

export const getTestRunnerVirtualDom = (testFiles: readonly TestFile[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: testFiles.length,
      className: testRunnerClassName,
      type: VirtualDomElements.Div,
    },
    ...testFiles.flatMap(getTestFileVirtualDom),
  ]
}
