module.exports = {

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env', '@babel/react']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};
