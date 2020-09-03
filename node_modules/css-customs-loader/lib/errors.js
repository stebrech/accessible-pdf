exports.addBeforeCssLoader = request =>
  new Error(
    `
css-customs-loader should be added BEFORE css-loader. ${request}
  `.trim()
  )

exports.missingPostcssLoader = new Error(
  `
postcss-loader is missing, you need to use it in order for css-customs-loader to work properly.
  `
)

exports.missingPostcssPresetEnv = new Error(
  `
postcss-preset-env is missing from your plugins, you need to use it in order for css-customs-loader to work properly.
  `
)
