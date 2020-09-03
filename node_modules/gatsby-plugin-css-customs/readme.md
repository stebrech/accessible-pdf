# gatsby-plugin-css-customs

Implements [css-customs-loader][] in Gatsby.

## Use CSS Modules!

Due to how Gatsby configures webpack rules for CSS in SSR stage, you have to put customs in a `.module.css` file, which uses CSS Modules. I could technically hack my way around this requirement, but it would be going against the grain and be unnecessarily fragile.

## Configuration

Add the plugin to `gatsby-config.js` after gatsby-plugin-postcss and any other Gatsby plugins that modify CSS webpack rules:

```
yarn add gatsby-plugin-postcss gatsby-plugin-css-customs
```

```js
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // ...other CSS plugins
    'gatsby-plugin-css-customs',
  ],
}
```

gatsby-plugin-css-customs detects [any valid PostCSS configuration][postcss-config] (including options passed to gatsby-plugin-postcss!), so let's create one. `importFrom` will point to a `global.module.css` file containing our customs and, for the sake of this example, we'll enable all features related to CSS customs:

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-preset-env': {
      importFrom: 'src/global.module.css',
      features: {
        'custom-properties': true, // already enabled by default
        'custom-media-queries': true,
        'custom-selectors': true,
      },
    },
  },
}
```

## Usage

See usage instructions in the [main readme][basic-usage], but use `global.module.css` instead of `global.css`.

[css-customs-loader]: https://github.com/silvenon/css-customs/blob/master/packages/css-customs-loader
[postcss-config]: https://github.com/michael-ciniawsky/postcss-load-config
[basic-usage]: https://github.com/silvenon/css-customs/blob/master/readme.md#basic-usage
