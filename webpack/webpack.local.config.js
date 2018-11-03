var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
var webpack = require('webpack');
var config = require('./webpack.base.config.js');

config.entry = {
  main: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, '../assets/js/src/main/index')
    // path.resolve('./assets/js/src/main/index')
  ]
};

config.devtool = 'inline-sourcemap';
config.output = {
  path: path.join(__dirname, '../assets/builds-development/'),
  // path: path.resolve('./assets/builds-development/'),
  filename: '[name]-[hash].js',
  publicPath: 'http://0.0.0.0:3000/assets/builds/',
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  // oddly, the below isn't using the path of this file. but rather web_app
  new BundleTracker({ filename: './webpack/webpack-stats.dev.json' }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      BASE_URL: JSON.stringify('http://0.0.0.0:8000/'),
    }
  })
];

config.module.rules[0].query.plugins = ['react-hot-loader/babel'];

config.devServer = {
  inline: true,
  progress: true,
  hot: true,
  historyApiFallback: true,
  host: '0.0.0.0',
  port: 3000
};

module.exports = config;
