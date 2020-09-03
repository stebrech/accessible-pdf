const requireFromString = require('require-from-string')
const path = require('path')
const compile = require('./compile')

const cssCustomsLoader = require.resolve('../')
const getCompiledExportedValue = ({ stats, entry }) => {
  const { source } = stats
    .toJson()
    .modules.find(
      ({ name, identifier }) =>
        name.includes(entry) && identifier.includes(cssCustomsLoader)
    )
  return requireFromString(
    source,
    `${__dirname}/fixtures/${path.basename(entry)}`
  )
}

describe(`emits an error`, () => {
  test(`when css-customs-loader is placed after css-loader`, async () => {
    await expect(
      compile({
        entry: './fixtures/basic.css',
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                },
              },
              cssCustomsLoader,
              'postcss-loader',
            ],
          },
        ],
      })
    ).rejects.toMatchSnapshot()
  })

  test(`when postcss-preset-env is missing`, async () => {
    await expect(
      compile({
        entry: './fixtures/basic.css',
        rules: [
          {
            test: /\.css$/,
            use: [
              cssCustomsLoader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [require('postcss-brand-colors')],
                },
              },
            ],
          },
        ],
      })
    ).rejects.toMatchSnapshot()
  })

  test(`when postcss-loader is missing`, async () => {
    await expect(
      compile({
        entry: './fixtures/basic.css',
        rules: [
          {
            test: /\.css$/,
            use: [cssCustomsLoader, 'css-loader'],
          },
        ],
      })
    ).rejects.toMatchSnapshot()
  })
})

it(`exposes CSS customs in the default export object`, async () => {
  const { stats, entry } = await compile({
    entry: './fixtures/basic.css',
    rules: [
      {
        test: /\.css$/,
        use: [
          cssCustomsLoader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  })
  const { locals } = getCompiledExportedValue({ stats, entry })
  expect(locals).toMatchInlineSnapshot(`
    Object {
      "customMedia": Object {
        "--narrow-window": "(max-width: 30em)",
      },
      "customProperties": Object {
        "--primary-color": "lightblue",
      },
      "customSelectors": Object {
        ":--title": "h1",
      },
    }
  `)
})

it(`exposes CSS Modules in the same object as customs`, async () => {
  const { stats, entry } = await compile({
    entry: './fixtures/modules.css',
    rules: [
      {
        test: /\.css$/,
        use: [
          cssCustomsLoader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  })
  const { locals } = getCompiledExportedValue({ stats, entry })
  expect(locals).toMatchInlineSnapshot(`
    Object {
      "customMedia": Object {
        "--narrow-window": "(max-width: 30em)",
      },
      "customProperties": Object {
        "--primary-color": "lightblue",
      },
      "customSelectors": Object {
        ":--title": "h1",
      },
      "text": "_3KySKA6rf07sl0ilq7bBBm",
    }
  `)
})

it(`can export only locals`, async () => {
  const { stats, entry } = await compile({
    entry: './fixtures/modules.css',
    rules: [
      {
        test: /\.css$/,
        use: [
          `${cssCustomsLoader}?onlyLocals`,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              onlyLocals: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  })
  const result = getCompiledExportedValue({ stats, entry })
  expect(result).toMatchInlineSnapshot(`
    Object {
      "customMedia": Object {
        "--narrow-window": "(max-width: 30em)",
      },
      "customProperties": Object {
        "--primary-color": "lightblue",
      },
      "customSelectors": Object {
        ":--title": "h1",
      },
      "text": "_3KySKA6rf07sl0ilq7bBBm",
    }
  `)
})

it(`supports files with external @imports`, async () => {
  await expect(
    compile({
      entry: './fixtures/external.css',
      rules: [
        {
          test: /\.css$/,
          include: `${__dirname}/fixtures`,
          use: [
            cssCustomsLoader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: { path: __dirname },
              },
            },
          ],
        },
      ],
    })
  ).resolves.toBeDefined()
})

it(`uses PostCSS plugins before postcss-preset-env`, async () => {
  const { stats, entry } = await compile({
    entry: './fixtures/postcss-plugins.css',
    rules: [
      {
        test: /\.css$/,
        use: [
          cssCustomsLoader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-brand-colors'),
                require('postcss-preset-env'),
              ],
            },
          },
        ],
      },
    ],
  })
  const { locals } = getCompiledExportedValue({ stats, entry })
  expect(locals).toMatchInlineSnapshot(`
    Object {
      "customMedia": Object {},
      "customProperties": Object {
        "--primary-color": "#1da1f2",
      },
      "customSelectors": Object {},
    }
  `)
})

it('uses webpack loaders after postcss-loader', async () => {
  const { stats, entry } = await compile({
    entry: './fixtures/loaders.less',
    rules: [
      {
        test: /\.less$/,
        use: [
          cssCustomsLoader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  })
  const { locals } = getCompiledExportedValue({ stats, entry })
  expect(locals).toMatchInlineSnapshot(`
    Object {
      "customMedia": Object {},
      "customProperties": Object {
        "--primary-color": "lightblue",
      },
      "customSelectors": Object {},
    }
  `)
})
