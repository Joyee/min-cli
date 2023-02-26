export interface Choice {
  name: string
  type?: string
  message?: string
  description?: string
  link?: string
  default?: boolean | string | null
  value: boolean | string
  short?: string
  checked?: boolean
}

export interface Prompt {
  name: string
  value?: string
  message: string
  pageSize?: number // when using list, rawList, expand or checkbox
  type?: string // Defaults: input
  when?: (answers: any) => void
  description?: string
  choices?: (() => Choice[]) | Choice[]
}

export default class Creator {
  featurePrompt: Prompt
  injectedPrompts: Prompt[]

  constructor() {
    this.featurePrompt = {
      name: 'features',
      message: 'Check the features needed for your project:',
      pageSize: 10,
      type: 'checkbox',
      choices: []
    }

    this.injectedPrompts = []
  }

  getFinalPrompts = () => {
    this.injectedPrompts.forEach((prompt) => {
      const originalWhen = prompt.when || (() => {})
      prompt.when = originalWhen
    })

    const prompts = [this.featurePrompt, ...this.injectedPrompts]

    return prompts
  }
}
