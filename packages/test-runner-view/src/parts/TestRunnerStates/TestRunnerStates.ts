import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { TestRunnerState } from '../TestRunnerState/TestRunnerState.ts'

export const { get, getCommandIds, registerCommands, set, wrapCommand } = ViewletRegistry.create<TestRunnerState>()
