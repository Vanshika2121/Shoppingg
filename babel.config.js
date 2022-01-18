module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      '@babel/plugin-proposal-decorators',
      // "@babel/plugin-proposal-class-properties",
      {legacy: true,
      },
    ],
  ],
};
