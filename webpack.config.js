module.exports = {
    //...
    externals: {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom'
    },

    output: {
        libraryTarget: 'commonjs2'
    },
    alias: {
        react: path.resolve('./node_modules/react')
      }
  };