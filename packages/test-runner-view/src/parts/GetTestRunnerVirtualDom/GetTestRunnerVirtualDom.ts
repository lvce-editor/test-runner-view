import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

const dom: readonly VirtualDomNode[] = [
  {
    childCount: 1,
    className: mergeClassNames('Viewlet', 'TestRunner'),
    type: VirtualDomElements.Div,
  },
  text('Hello World'),
]

export const getTestRunnerVirtualDom = (): readonly VirtualDomNode[] => {
  return dom
}
