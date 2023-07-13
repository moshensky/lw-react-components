// FIXME
/* eslint-disable */
const { resolve } = require('path')

module.exports = {
  PATH: {
    public: './dist',
    output: resolve(__dirname, '..', 'dist'),
    nodeModules: resolve(__dirname, '..', 'node_modules'),
    src: resolve(__dirname, '..', 'src'),
    base: resolve(__dirname, '..', ''),
  },
}
