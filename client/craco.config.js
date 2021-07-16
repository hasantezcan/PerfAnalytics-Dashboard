const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')

// Customize Theme
// https://ant.design/docs/react/customize-theme#Use-dark-or-compact-theme

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1890ff' },
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ]
}
