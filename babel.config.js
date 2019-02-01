const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  [
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '@assets': './assets',
        '@components': './components',
        '@containers': './containers',
        '@utils': './utils',
        '@stores': './stores',
        '@services': './services',
        '@i18n': './i18n',
        '@navigation': './navigation'
      }
    }
  ]
]

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins
}
