const path = require('path')

module.exports = [
  createConfig('var', 'tokenizer.var.js'),
  createConfig('commonjs2', 'tokenizer.commonjs2.js'),
  createConfig('amd', 'tokenizer.amd.js'),
  createConfig('umd', 'tokenizer.umd.js'),
  createConfig('umd', 'tokenizer.js')
]

function createConfig (target, filename) {
  return {
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
      extensions: ['.ts', '.js']
    },
    output: {
      library: 'Tokenizer',
      libraryTarget: target,
      libraryExport: 'default',
      filename: filename,
      path: path.resolve(__dirname, '../../dist')
    }
  }
}
