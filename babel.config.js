module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@types': './src/types/index',
          '@styles': './src/styles/index',
          '@globalStyles': './src/styles/globalStyles',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@redux': './src/redux',
          '@resources': './src/resources',
          '@components': './src/components/index',
          '@hooks': './src/hooks',
          '@utils': './src/utils/index',
          '@assets': './src/assets',
          '@i18n': './src/i18n/i18n',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ]
};
