import PromptModuleAPI from '../PromptModuleAPI'

export default (api: PromptModuleAPI) => {
  api.injectFeature({
    name: 'needsRouter',
    type: 'confirm',
    message: 'Add Vue Router for Single Page Application development?',
    default: true,
    value: 'router'
  })
}
