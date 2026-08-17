import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { TestFile } from '../TestRunnerState/TestRunnerState.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

const testFileRow: VirtualDomNode = {
  childCount: 2,
  className: mergeClassNames('TreeItem', 'TestRunnerItem'),
  type: VirtualDomElements.Div,
}

const playIcon: VirtualDomNode = {
  childCount: 0,
  className: mergeClassNames('MaskIcon', 'MaskIconPlay'),
  type: VirtualDomElements.I,
}

const getTestFileVirtualDom = (testFile: TestFile): readonly VirtualDomNode[] => {
  return [
    testFileRow,
    {
      childCount: 1,
      className: mergeClassNames('Label', 'Grow'),
      title: testFile.uri,
      type: VirtualDomElements.Span,
    },
    text(testFile.name),
    {
      ariaLabel: `Run ${testFile.name}`,
      childCount: 1,
      className: mergeClassNames('InlineButton', 'TestRunnerRunButton'),
      name: testFile.uri,
      onClick: DomEventListenerFunctions.HandleRun,
      type: VirtualDomElements.Button,
    },
    playIcon,
  ]
}

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
