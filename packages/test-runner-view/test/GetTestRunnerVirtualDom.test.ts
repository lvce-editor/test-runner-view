import { expect, test } from '@jest/globals'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getTestRunnerVirtualDom } from '../src/parts/GetTestRunnerVirtualDom/GetTestRunnerVirtualDom.ts'

test('renders hello world', () => {
  expect(getTestRunnerVirtualDom()).toEqual([
    {
      childCount: 1,
      className: mergeClassNames('Viewlet', 'TestRunner'),
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      text: 'Hello World',
      type: VirtualDomElements.Text,
    },
  ])
})
