import { expect, test } from '@jest/globals'
import { EventExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renders run event listener', () => {
  expect(renderEventListeners()).toEqual([
    {
      name: DomEventListenerFunctions.HandleRun,
      params: ['handleRun', EventExpression.TargetName],
    },
  ])
})
