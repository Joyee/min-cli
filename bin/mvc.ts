import { program } from 'commander'

// 注册一个 create 命令，设置脚手架的版本和描述
program
  .version('0.1.0')
  .command('create <name>')
  .description('create a new project')
  .action((name) => {
    // TODO
    // 如 命令行输入 create myapp，则 commander解析到 name=myapp
  })
