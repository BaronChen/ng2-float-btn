var path = require("path");
var webpack = require('webpack');

var config = {
  entry: {
    'ng2-float-btn': path.join(__dirname, 'src', 'index.ts')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.html']
  },
  resolveLoader: {
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].umd.js",
    library: ["[name]"],
    libraryTarget: "umd"
  },
  externals: [
    /^rxjs\//,
    /^@angular\//
  ],
  devtool: 'source-map',
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
            loader: 'angular2-template-loader'
          }
        ],

      },
      { test: /\.html$/, use: 'raw-loader' }
    ]
  },
};

if (process.env.NODE_ENV === 'production') {
  config.module.rules.push({
    test: /\.ts$/, loader: 'strip-loader?strip[]=debug,strip[]=console.log'
  });
}

module.exports = config;
