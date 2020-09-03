module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        'custom-properties': true,
        'custom-media-queries': true,
        'custom-selectors': true,
      },
    },
  },
}
