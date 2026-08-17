import { expect, test } from '@jest/globals'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getTestRunnerVirtualDom } from '../src/parts/GetTestRunnerVirtualDom/GetTestRunnerVirtualDom.ts'

test('renders an empty test list', () => {
  expect(getTestRunnerVirtualDom([])).toEqual([
    {
      childCount: 0,
      className: mergeClassNames('Viewlet', 'TestRunner', 'Tree'),
      type: VirtualDomElements.Div,
    },
  ])
})

test('renders test files with run buttons', () => {
  expect(
    getTestRunnerVirtualDom([
      { name: 'first.test.ts', uri: 'file:///workspace/first.test.ts' },
      { name: 'second.test.ts', uri: 'file:///workspace/src/second.test.ts' },
    ]),
  ).toEqual([
    {
      childCount: 2,
      className: mergeClassNames('Viewlet', 'TestRunner', 'Tree'),
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: mergeClassNames('TreeItem', 'TestRunnerItem'),
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: mergeClassNames('Label', 'Grow'),
      title: 'file:///workspace/first.test.ts',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: 'first.test.ts',
      type: VirtualDomElements.Text,
    },
    {
      ariaLabel: 'Run first.test.ts',
      childCount: 1,
      className: mergeClassNames('InlineButton', 'TestRunnerRunButton'),
      name: 'file:///workspace/first.test.ts',
      onClick: DomEventListenerFunctions.HandleRun,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: mergeClassNames('MaskIcon', 'MaskIconPlay'),
      type: VirtualDomElements.I,
    },
    {
      childCount: 2,
      className: mergeClassNames('TreeItem', 'TestRunnerItem'),
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: mergeClassNames('Label', 'Grow'),
      title: 'file:///workspace/src/second.test.ts',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: 'second.test.ts',
      type: VirtualDomElements.Text,
    },
    {
      ariaLabel: 'Run second.test.ts',
      childCount: 1,
      className: mergeClassNames('InlineButton', 'TestRunnerRunButton'),
      name: 'file:///workspace/src/second.test.ts',
      onClick: DomEventListenerFunctions.HandleRun,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: mergeClassNames('MaskIcon', 'MaskIconPlay'),
      type: VirtualDomElements.I,
    },
  ])
})
