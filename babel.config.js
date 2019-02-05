module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@containers': './src/containers',
          '@utils': './src/utils',
          '@stores': './src/stores',
          '@services': './src/services',
          '@i18n': './src/i18n',
          '@navigations': './src/navigations'
        }
      }
    ]
  ]
}
