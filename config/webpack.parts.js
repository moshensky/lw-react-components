// FIXME
/* eslint-disable */
const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.setFreeVariable = (key, value) => {
  const env = {}
  env[key] = JSON.stringify(value)

  return {
    plugins: [new webpack.DefinePlugin(env)],
  }
}

exports.extractBundles = (bundles) => ({
  plugins: bundles.map((bundle) => new webpack.optimize.CommonsChunkPlugin(bundle)),
})

const cssCommonLoaders = [
  {
    loader: 'css-loader',
    options: { importLoaders: 1 },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: resolve(__dirname, 'postcss.config.js'),
      },
    },
  },
]

exports.complex = {
  miniCssExtract: () => ({
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[name].[chunkhash].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            ...cssCommonLoaders,
          ],
        },
      ],
    },
  }),
}

exports.plugin = {
  bundleAnalyzer: (opts = { analyzerMode: 'static' }) => ({
    plugins: [new BundleAnalyzerPlugin(opts)],
  }),

  htmlWebpackPlugin: ({ title, baseUrl, scripts }) => ({
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
        metadata: {
          title,
          baseUrl,
          scripts,
        },
      }),
    ],
  }),

  copyWebpackPlugin: (files) => ({
    plugins: [new CopyWebpackPlugin({ patterns: files })],
  }),
}

exports.devServer = ({ host, port, publicPath, proxy } = {}) => ({
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    host,
    port,
    publicPath,
    overlay: {
      errors: true,
      warnings: true,
    },
    open: false,
    proxy,
  },
})

exports.moduleRules = {
  loadTSWithTSLoader: ({ include, exclude, options }) => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{ loader: 'ts-loader', options }],
          include,
          exclude,
        },
      ],
    },
  }),

  loadCSS: () => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            ...cssCommonLoaders
          ],
        },
      ],
    },
  }),

  loadSourceMaps: (opts) => ({
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          include: opts.include,
          exclude: opts.exclude,
          loader: 'source-map-loader',
        },
      ],
    },
  }),

  // TODO: use AssetModules
  loadImages: ({ include, exclude, options } = {}) => ({
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg|gif)$/,
          include,
          exclude,
          use: { loader: 'asset/inline', options },
        },
      ],
    },
  }),

  // TODO: use AssetModules
  loadFonts: ({ include, exclude, options } = {}) => ({
    module: {
      rules: [
        {
          // Capture eot, ttf, woff, and woff2
          test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          include,
          exclude,
          use: { loader: 'asset/resource', options },
        },
      ],
    },
  }),
}
