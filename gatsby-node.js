const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      value: `${value}`,
    })
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName
    });
  }
}

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
              slug
              collection
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
        path: `/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/basics.js`),
        context: { 
          id: node.id,
          slug: node.frontmatter.slug,
          lang: node.frontmatter.lang,
        },
      })
    }

    else if (node.frontmatter.template === 'tutorials') {
      createPage({
        path: `/tutorials${node.fields.slug}`,
        component: path.resolve(`./src/templates/tutorials.js`),
        context: { id: node.id },
      })
    }

    else {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/glossary.js`),
        context: { id: node.id },
      })
    }
  })
}



