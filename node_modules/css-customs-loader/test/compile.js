const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const path = require('path')

const normalizeOutput = str =>
  str
    // for CI
    .replace(new RegExp(process.cwd(), 'g'), '<CWD>')
    // for Node versions
    .replace('.request [as addBeforeCssLoader]', '')

// https://webpack.js.org/contribute/writing-a-loader/#testing

module.exports = ({ entry, writeToDisk = false, rules }) => {
  const compiler = webpack({
    entry,
    output: {
      path: `${__dirname}/dist`,
      filename: `${path.basename(entry, path.extname(entry))}.bundle.js`,
    },
    context: __dirname,
    mode: 'none',
    target: 'node',
    module: { rules },
  })

  if (!writeToDisk) {
    compiler.outputFileSystem = new MemoryFs()
  }

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err != null) {
        return reject(normalizeOutput(err))
      }
      if (stats.hasErrors()) {
        return reject(normalizeOutput(stats.toJson().errors.join('\n\n')))
      }
      resolve({ stats, entry })
    })
  })
}
