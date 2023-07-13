// FIXME
/* eslint-disable */
const { resolve } = require('path')
const { DllPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const parts = require('./webpack.parts')
const { PATH } = require('./path')

const exclude = ['react-icons', 'jsdom', 'glob']
const packageFilePath = resolve(PATH.base, 'package')
const vendor = Object.keys(require(packageFilePath).dependencies).filter(
  (packageName) => !(packageName.startsWith('@types') || exclude.includes(packageName)),
)

module.exports = merge([
  parts.moduleRules.loadFonts({ options: { name: './fonts/[name].[contenthash].[ext]' } }),
  parts.moduleRules.loadCSS(),
  parts.moduleRules.loadImages(),
  {
    context: __dirname,

    /**
     * `source-map` - slowest most quality maps
     * `eval` - fastest with least quality maps
     * `cheap-eval-source-map` - transformed code
     * `cheap-module-eval-source-map` - original source
     */
    devtool: 'source-map',

    entry: {
      vendor: vendor,
    },
    output: {
      path: PATH.output,
      filename: '[name].dll.js',
      library: '[name]',
      // library: '[name].[contenthash]',
    },
    plugins: [
      new DllPlugin({
        path: resolve(PATH.output, '[name]-manifest.json'),
        name: '[name]',
        // name: '[name].[contenthash]',
        context: PATH.base,
      }),
    ],
    mode: 'development',
  },
])
