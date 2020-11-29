const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8000,
    open: true,
    watchOptions: {
      ignored: ['../node_modules/**', '../dist/**']
    }
  }
})
