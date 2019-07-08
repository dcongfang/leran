const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        }
      ]
      }
    ]
  },
  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '.src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'app/*.html'))
  ]
}
module.exports = webpackConfig