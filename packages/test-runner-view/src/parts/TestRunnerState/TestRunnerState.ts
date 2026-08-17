export interface TestFile {
  readonly name: string
  readonly uri: string
}

export interface TestRunnerState {
  readonly id: number
  readonly rendered: boolean
  readonly testFiles: readonly TestFile[]
  readonly workspacePath: string
}
