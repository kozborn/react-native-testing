const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: "web"
  },
  entry: [
    path.join(__dirname, './index.web.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader?cacheDirectory=true'
        ]
      },
      {
        // Most react-native libraries include uncompiled ES6 JS.
        test: /\.js$/,
        include: /node_modules\/react-native-/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(pdf|gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      },
      {
        test: /\.html$/,
        use: [{
            loader: 'html-loader',
            options: {
                minimize: true
              }
         }]
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    }
  }
};