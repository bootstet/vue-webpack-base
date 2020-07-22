const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // contentBase: './dist',
    port: 9001,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.css$/,
        use: {
          loader: 'url-loader',
          // options: {
            // limit: 10 * 1024
          // }
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', {
            loader: 'style-resources-loader',
            options: {
              patterns: path.resolve(__dirname, 'path/to/less/variables/*.less'),
              // injector: 'append'
            }
        }]
      },
      {
        test: /.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }, 
      {
        test: /.(png|jpg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 10 
          }
        }
      },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-vue',
      meta: {
        viewport: 'width=decice-width',
      },
      template: './public/index.html',
    }),
  ]
}