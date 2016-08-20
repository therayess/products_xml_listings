const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/js')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!sass?sourceMap'
        )
      }
    ]
  },
  sassLoader: {
    includePaths: [ './sass' ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css')
  ]
}
