const TestUtils = require('./utils')
const { loaderSerializer } = require('./serializers')

const {
  onCreateWebpackConfig: applyPostcss,
} = require('gatsby-plugin-postcss/gatsby-node')
const {
  onCreateWebpackConfig: applyCssModulesFlowTypes,
} = require('gatsby-plugin-css-modules-flow-types/gatsby-node')
const { onCreateWebpackConfig: applyCssCustoms } = require('../gatsby-node')

expect.addSnapshotSerializer(loaderSerializer)

it('applies the loader', () => {
  const utils = new TestUtils()
  applyPostcss(...utils.mockParams())
  applyCssCustoms(...utils.mockParams())
  expect(utils.getCssRules()).toMatchSnapshot()
})

it('composes well with similar plugins', () => {
  const utils = new TestUtils()
  applyPostcss(...utils.mockParams())
  applyCssModulesFlowTypes(...utils.mockParams())
  applyCssCustoms(...utils.mockParams())
  expect(utils.getCssRules()).toMatchSnapshot()
})

describe('SSR', () => {
  it('exports only locals', () => {
    const utils = new TestUtils({ stage: 'html' })
    applyPostcss(...utils.mockParams())
    applyCssCustoms(...utils.mockParams())
    expect(utils.getCssRules()).toMatchSnapshot()
  })
})
