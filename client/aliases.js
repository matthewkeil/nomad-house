const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const prettierrc = require('./.prettierrc')
const tsconfigTemplate = require('./tsconfig.template') || {}

/**
 * @param _paths: string[]
 */
const resolve = (..._paths) => {
  return path.resolve(__dirname, ..._paths)
}

/**
 *
 * Configuration
 *
 */
const tsconfigPath = resolve('tsconfig.json')
const aliases = {
  '@assets': 'src/assets',
  '@components': 'src/components',
  '@layouts': 'src/router/layouts',
  '@views': 'src/router/views',
  '@store': 'src/store',
  '@utils': 'src/utils',
}

module.exports = {
  webpack: {},
  jest: {},
  tsconfig: {},
}

for (const alias in aliases) {
  const aliasTo = aliases[alias]
  module.exports.webpack[alias] = resolve(aliasTo)
  const aliasHasExtension = /\.\w+$/.test(aliasTo)
  module.exports.jest[`^${alias}$`] = aliasHasExtension
    ? `<rootDir>/${aliasTo}`
    : `<rootDir>/${aliasTo}/index.js`
  module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`
  if (!aliasTo.includes('/index.'))
    module.exports.tsconfig[alias + '/*'] = [aliasTo + '/*']
  module.exports.tsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
        aliasTo + '/index.ts',
        aliasTo + '/index.json',
        aliasTo + '/index.vue',
        aliasTo + '/index.scss',
        aliasTo + '/index.css',
      ]
}

fs.writeFile(
  tsconfigPath,
  prettier.format(
    JSON.stringify({
      ...tsconfigTemplate,
      compilerOptions: {
        ...(tsconfigTemplate.compilerOptions || {}),
        paths: module.exports.tsconfig,
      },
    }),
    {
      ...prettierrc,
      parser: 'json',
    }
  ),
  (error) => {
    if (error) {
      console.error('Error while creating tsconfig.json from aliases.js.')
      throw error
    }
  }
)
