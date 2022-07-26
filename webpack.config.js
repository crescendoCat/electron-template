var path = require('path');
var webpack = require('webpack');
const postcssPresetEnv = require('postcss-preset-env');
module.exports = (env) => ({
  entry: './app.js',
  output: {path: __dirname, filename: 'bundle.js' },
  mode: env.production ? 'production' : 'development',
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader', 
          options: { 
            presets: 
            ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/, 
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          'css-loader', 
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({ browsers: 'last 1 versions' })
                ]
              }
              
            }
          },
          'sass-loader'],
      },
    ]
  },
});