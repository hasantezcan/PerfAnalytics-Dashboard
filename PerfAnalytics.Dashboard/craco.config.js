const CracoLessPlugin = require('craco-less')

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
    }
  ]
}
