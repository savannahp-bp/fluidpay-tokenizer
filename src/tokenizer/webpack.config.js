const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    library: 'Tokenizer',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'tokenizer.js',
    path: path.resolve(__dirname, '../../dist')
  }
}
