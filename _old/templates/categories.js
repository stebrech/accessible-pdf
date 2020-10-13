import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"
import { useIntl, FormattedDate } from "gatsby-plugin-intl";

import style from "./articles.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Pagination from "../components/pagination"

// Component to place a conditional wrapper around content.
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const ArticleIndex = ({ data, pageContext }) => {

  const posts = data.allMarkdownRemark.edges
  const { category } = pageContext
  console.log(pageContext)

  // Internationalization
  const intl = useIntl();
  const locale = intl.locale !== "en" ? `/${intl.locale}` : "";

  // Filtering posts by locale
  const filteredPosts = posts.filter((edge) =>
  edge.node.frontmatter.lang.includes(intl.locale)
  );

  let pageHeader = `Articles`
  if (category) {
    pageHeader = `Filed under ${category}:`
  }

  return (
    <Layout>
      <SEO
        title={`All articles on the category "${category}"`}
        description="All articles filed under this category."
        image="/logo.png"
        pathname={`/categories/${category}`}
        // Boolean indicating whether this is an article:
        // article
      />
      <Sidebar/>
      <section className={style.articlelist}>
        <h1>{pageHeader}</h1>
        <ul>
          {filteredPosts.map(({ node }, index) => (
            <li key={index} className={style.listitem}>
              {node.frontmatter.featimg && (
                <figure className={style.featimg}>
                  <Link to={`${locale}/${node.fields.slug}`}>
                    <Img
                      fixed={node.frontmatter.featimg.childImageSharp.fixed}
                      alt={node.frontmatter.title}
                    />
                  </Link>
                </figure>
              )}
              <ConditionalWrapper
                // If featured image, wrap content in <div>.
                condition={node.frontmatter.featimg}
                wrapper={children => (
                  <div className={style.article__wrap}>{children}</div>
                )}
              >
                <Link to={`${locale}/${node.fields.slug}`}>
                  <h2 className={style.article__title}>
                    {node.frontmatter.title}
                  </h2>
                </Link>

                <div className={style.article__meta}>
                  by {node.frontmatter.author}. Published{" "}
                  <time>
                    <FormattedDate
                      value={new Date(node.frontmatter.date)}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  </time>
                </div>
                <div className={style.article__tax}>
                  Filed under:{" "}
                  {node.frontmatter.category.map((cateogory, index) => [
                    index > 0 && ", ",
                    <Link key={index} to={`${locale}/categories/${_.kebabCase(category)}`}>
                      {cateogory}
                    </Link>,
                  ])}
                </div>
                <div
                  className={style.article__content}
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
              </ConditionalWrapper>
            </li>
          ))}
        </ul>
      </section>
      {/* <Pagination pageContext={pageContext} /> */}
    </Layout>
  )
}

export default ArticleIndex

export const query = graphql`
  query($category: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { in: [$category] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date
            category
            author
            lang
            featimg {
              childImageSharp {
                fixed(width: 400, height: 400, cropFocus: ATTENTION) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
