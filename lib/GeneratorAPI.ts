import { globby } from 'globby'
import fs from 'node:fs'

const isObject = (val: any) => val && typeof val === 'object'

class GeneratorAPI {
  constructor(private readonly pkg: Record<string, any>) {
    this.pkg = pkg
  }

  // 注入依赖
  extendPackage = (fields: Record<string, any>) => {
    const pkg = this.pkg
    for (const key in fields) {
      const value = fields[key]
      const existing = pkg[key]
      if (
        isObject(value) &&
        (key === 'dependencies' || key === 'devDependencies' || key === 'scripts')
      ) {
        pkg[key] = Object.assign(existing || {}, value)
      } else {
        pkg[key] = value
      }
    }
  }

  // 渲染模板
  render = (source: string, additionalData = {}, ejsOptions = {}) => {
    const _files = globby(['**/*'], { cwd: source, dot: true })
    for (const rawPath in _files) {
      // 解析template下的所有文件
    }
  }
}

export default GeneratorAPI
