import { terminate } from '@lvce-editor/viewlet-registry'
import { create2 } from '../Create2/Create2.ts'
import { diff2 } from '../Diff2/Diff2.ts'
import { loadContent } from '../LoadContent/LoadContent.ts'
import { render2 } from '../Render2/Render2.ts'
import { renderEventListeners } from '../RenderEventListeners/RenderEventListeners.ts'
import * as TestRunnerStates from '../TestRunnerStates/TestRunnerStates.ts'

export const commandMap = {
  'TestRunner.create2': create2,
  'TestRunner.diff2': diff2,
  'TestRunner.getCommandIds': TestRunnerStates.getCommandIds,
  'TestRunner.loadContent': TestRunnerStates.wrapCommand(loadContent),
  'TestRunner.render2': render2,
  'TestRunner.renderEventListeners': renderEventListeners,
  'TestRunner.terminate': terminate,
}
