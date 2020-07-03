// mini-css-extract-plugin is needed to create CSS files instead of bundles
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { join } = require('path');

module.exports = {
  entry: './src/sass/main.js',
  mode: 'development',
  output: {
    path: join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.scss']
  }
  //  plugins: [
  //     ///...
  //     new MiniCssExtractPlugin({
  //       filename: '[name].css'
  //     })
  //   ]
}
