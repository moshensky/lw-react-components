// FIXME
/* eslint-disable */
const { merge } = require('webpack-merge')
const parts = require('../webpack.parts')
const { PATH } = require('../path')

module.exports = ({ config, mode }) => {
  config.module.rules = []
  const common = merge([
    config,
    {
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: [PATH.src, 'node_modules'],
      },
    },
    parts.moduleRules.loadTSWithTSLoader({
      include: PATH.src,
      exclude: PATH.nodeModules,
      options: { transpileOnly: true },
    }),
    parts.moduleRules.loadFonts({ options: { name: './fonts/[name].[hash].[ext]' } }),
    parts.moduleRules.loadCSS(),
    parts.moduleRules.loadImages(),
  ])

  return mode.toLowerCase() === 'production'
    ? merge([
        common,
        {
          performance: {
            hints: false,
          },
        },
      ])
    : common
}
