module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@types': './src/types',
          '@styles': './src/styles',
          '@lib': './src/lib',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
