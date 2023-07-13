// FIXME
/* eslint-disable */
const { DllReferencePlugin } = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require('webpack-merge')
const parts = require('./webpack.parts')
const { PATH } = require('./path')

const generateDescriptor = () => ({
  // commitHash,
  // commitTime: getCommitDate(commitHash),
  deployTime: new Date().toISOString(),
  version: process.env.APP_VERSION,
})

const descriptor = generateDescriptor()
const title = 'LIMS NOW'
const baseUrl = '/'

module.exports = (env, { mode }) => {
  const common = merge([
    parts.moduleRules.loadFonts({ options: { name: './fonts/[name].[contenthash].[ext]' } }),
    parts.plugin.copyWebpackPlugin([
      { from: 'src/assets/favicon.ico', to: 'favicon.ico' },
      { from: 'src/assets/locales', to: 'assets/locales' },
      { from: 'src/assets/images', to: 'assets/images' },
    ]),
    {
      entry: {
        app: [`${PATH.src}/index.tsx`],
      },
      resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
        modules: [PATH.src, 'node_modules'],
      },
      // ignoreWarnings: [/export .* was not found in/]
    },
    parts.setFreeVariable('process.env.COMMIT_HASH', descriptor.commitHash),
    parts.setFreeVariable('process.env.COMMIT_TIME', descriptor.commitTime),
    parts.setFreeVariable('process.env.DEPLOY_TIME', descriptor.deployTime),
    parts.setFreeVariable('process.env.WEB_APP_VERSION', descriptor.version),
  ])

  return mode === 'production'
    ? merge([
      common,
      ...(process.env.ANALYZE_BUNDLE ? [parts.plugin.bundleAnalyzer()] : []),
      parts.moduleRules.loadTSWithTSLoader({
        include: PATH.src,
        exclude: PATH.nodeModules,
        options: { transpileOnly: true },
      }),
      parts.plugin.htmlWebpackPlugin({ title, baseUrl }),
      parts.complex.miniCssExtract(),
      parts.moduleRules.loadImages({
        options: {
          limit: 15000,
          name: './images/[name].[contenthash].[ext]',
        },
      }),
      {
        output: {
          path: PATH.output,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[name].[chunkhash].js',
        },
        mode: 'production',
        optimization: {
          splitChunks: {
            chunks: 'all',
          },
          minimizer: [
            new TerserPlugin({
              parallel: true,
              // sourceMap: true,
            }),
            new CssMinimizerPlugin(),
          ],
        },
      },
    ])
    : merge([
      common,
      parts.moduleRules.loadTSWithTSLoader({
        include: PATH.src,
        exclude: PATH.nodeModules,
        options: { transpileOnly: true },
      }),
      parts.moduleRules.loadCSS(),
      parts.moduleRules.loadImages(),
      parts.plugin.htmlWebpackPlugin({
        title,
        scripts: [`${PATH.public}/vendor.dll.js`],
        baseUrl,
      }),
      {
        output: {
          path: PATH.output,
          filename: '[name].[contenthash].js',
        },
        mode: 'development',
        devtool: 'source-map',
        plugins: [
          new DllReferencePlugin({
            context: PATH.base,
            manifest: require(`${PATH.output}/vendor-manifest.json`),
          }),
        ],
        devServer: {
          static: [
            { directory: PATH.base, },
            { directory: PATH.output, }
          ],
          compress: true,
          host: '0.0.0.0',
          hot: true,
          historyApiFallback: true,
          port: 8080,
          proxy: [
            {
              context: ['/token', '/api'],
              // target: `http://${ip.address()}:3000`,
              target: 'http://localhost:5000',
            },
          ],
        },
      },
    ])
}
