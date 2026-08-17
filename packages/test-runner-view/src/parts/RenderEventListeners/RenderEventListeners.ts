import { EventExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly unknown[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleRun,
      params: ['handleRun', EventExpression.TargetName],
    },
  ]
}
