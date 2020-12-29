const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })

//     const parent = getNode(node.parent)
//     let collection = parent.sourceInstanceName
//     createNodeField({
//       node,
//       name: "collection",
//       value: collection,
//     })
//   }
// }


exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              locale
            }
            frontmatter {
              slug
              template
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {

    if (node.frontmatter.template === 'basics') {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/basics.js`),
        context: { 
          slug: node.frontmatter.slug,
          locale: node.fields.locale 
        },
      })
    }

    else if (node.frontmatter.template === 'tutorials') {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/tutorials.js`),
        context: { 
          slug: node.frontmatter.slug,
          locale: node.fields.locale 
        },
      })
    }

    else {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/default.js`),
        context: { 
          slug: node.frontmatter.slug,
          locale: node.fields.locale 
        },
      })
    }
  })
}
