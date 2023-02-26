import PromptModuleAPI from '../PromptModuleAPI'

export default (api: PromptModuleAPI) => {
  api.injectFeature({
    name: 'Typescript',
    message: 'Add TypeScript?',
    type: 'confirm',
    default: false,
    value: 'typescript'
  })
}
