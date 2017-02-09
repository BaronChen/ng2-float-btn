const webpack = require('webpack');

const config = {
  resolve: {
    extensions: ['.ts', '.webpack.js', '.web.js', '.js'],
    alias: {
      'test-lib': '../src/index.ts'
    }
  },
  devtool: 'source-map',
  entry:{ 'main' : './app/main.ts' },
  module: {
    rules: [
      {
        test: /\.ts$/, 
        use: [
          {
            loader: 'ts-loader',
            options: {
              include: ['src/**/*.ts', 'app/**/*.ts']
            },
          }, 
          {
            loader:'angular2-template-loader' 
          }
        ], 
       
      },
      { test: /\.html$/, use: 'raw-loader' }
    ]
  },
  plugins: [],
  
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};


module.exports = config;
