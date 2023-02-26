// import inquirer from 'inquirer'
import Creator from './Creator'
import PromptModuleAPI from './PromptModuleAPI'
const inquirer = require('inquirer')

async function create() {
  const creator = new Creator()
  const promptAPI = new PromptModuleAPI(creator)
  const modules = await getPromptModules()
  modules.forEach((m) => m.default(promptAPI))

  // 弹出交互提示语并且获取answers
  const answers = await inquirer.prompt(creator.getFinalPrompts())
  console.log(answers)
  // {
  //   features: [ 'typescript', 'router', 'linter' ],
  //   eslintConfig: 'airbnb',
  //   lintOn: [ 'commit' ]
  // }
  // 默认有vite
  answers.features.unshift('vue', 'vite')

  async function getPromptModules() {
    return await Promise.all(
      ['typescript', 'router', 'linter'].map((file) => import(`./promptModules/${file}`))
    )
  }
}

create()

export default create
