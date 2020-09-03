/**
 * Minimally reproduces everything that our dependencies need.
 */

class TestUtils {
  constructor({ stage = 'develop' } = {}) {
    this.stage = stage
    this.config = this.mockConfig()
  }

  mockLoaders() {
    return {
      null: jest.fn(options => ({
        loader: 'null-loader',
        options: { ...options },
      })),
      js: jest.fn(options => ({
        loader: 'babel-loader',
        options: { ...options },
      })),
      style: jest.fn(options => ({
        loader: 'style-loader',
        options: { ...options },
      })),
      css: jest.fn(options => ({
        loader: this.stage.includes('html')
          ? 'css-loader/locals'
          : 'css-loader',
        options: { ...options },
      })),
      miniCssExtract: jest.fn(options => ({
        loader: 'mini-css-extract-loader',
        options: { ...options },
      })),
    }
  }

  mockRules() {
    const loaders = this.mockLoaders()
    return {
      js: jest.fn(() => ({
        test: /\.js$/,
        use: [loaders.js()],
      })),
      css: jest.fn(() => ({
        test: /\.css$/,
        use: this.stage.includes('html')
          ? [loaders.css()]
          : [loaders.style(), loaders.css()],
      })),
      cssModules: jest.fn(() => ({
        test: /\.module\.css$/,
        use: this.stage.includes('html')
          ? [loaders.css()]
          : [loaders.style(), loaders.css({ modules: true })],
      })),
    }
  }

  mockConfig() {
    const rules = this.mockRules()
    return {
      module: {
        rules: [
          rules.js(),
          {
            oneOf: [rules.cssModules(), rules.css()],
          },
        ],
      },
    }
  }

  mockParams(pluginOptions = {}) {
    return [
      {
        stage: this.stage,
        getConfig: jest.fn(() => this.config),
        loaders: this.mockLoaders(),
        rules: this.mockRules(),
        actions: {
          replaceWebpackConfig: jest.fn(nextConfig => {
            this.config = nextConfig
          }),
        },
      },
      pluginOptions,
    ]
  }

  getCssRules() {
    return this.config.module.rules.slice(-1)[0].oneOf
  }
}

module.exports = TestUtils
