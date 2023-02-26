import Creator, { Choice, Prompt } from './Creator'

export default class PromptModuleAPI {
  constructor(private readonly creator: Creator) {
    this.creator = creator
  }

  injectFeature = (feature: Choice) => {
    Array.isArray(this.creator.featurePrompt.choices) &&
      this.creator.featurePrompt.choices?.push(feature)
  }

  injectPrompt = (prompt: Prompt) => {
    this.creator.injectedPrompts.push(prompt)
  }
}
