module.exports = {
  presets: ['next/babel'],
  plugins: [
    'glsl',
    ['react-native-web', { commonjs: true }],
  ],
}
