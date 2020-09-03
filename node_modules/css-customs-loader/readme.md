# css-customs-loader

A webpack loader that exposes [CSS customs][customs] to JavaScript.

## Configuration

```
yarn add css-customs-loader postcss-loader postcss-preset-env
```

You need to add css-customs-loader **before** css-loader:

```js
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-customs-loader'
            // defaults
            options: {
              onlyLocals: false,
            },
          },
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
      },
    ],
  },
}
```

css-customs-loader detects [any valid PostCSS configuration][postcss-config] (including options passed to postcss-loader!), so let's create one. `importFrom` will point to a `global.css` file containing our customs and, for the sake of this example, we'll enable all features related to CSS customs:

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-preset-env': {
      importFrom: 'src/global.css',
      features: {
        'custom-properties': true, // already enabled by default
        'custom-media-queries': true,
        'custom-selectors': true,
      },
    },
  },
}
```

### Options

#### `onlyLocals`

This option should be enabled in situations like pre-rendering. You should combine it with [`onlyLocals`][onlyLocals] option in css-loader v2 or [`css-loader/locals`][css-loader-locals] loader in css-loader v1. (Don't use style-loader when pre-rendering.)

## Usage

See usage instructions in the [main readme][basic-usage].

[customs]: https://github.com/silvenon/css-customs/blob/master/readme.md#css-customs
[onlyLocals]: https://github.com/webpack-contrib/css-loader#onlyLocals
[css-loader-locals]: https://github.com/webpack-contrib/css-loader/blob/v1.0.1/locals.js
[postcss-config]: https://github.com/michael-ciniawsky/postcss-load-config
[basic-usage]: https://github.com/silvenon/css-customs/blob/master/readme.md#basic-usage
