import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"
import { useIntl, FormattedDate } from "gatsby-plugin-intl";

import style from "./articles.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import Sidebar from "../components/sidebar";

// Component to place a conditional wrapper around content.
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const ArticleIndex = ({ data, pageContext }) => {

  // Internationalization
  const intl = useIntl();
  const locale = intl.locale !== "en" ? `/${intl.locale}` : "";

  // Raw query data
  const posts = data.allMarkdownRemark.edges

  // Filtering posts by locale
  const filteredPosts = posts.filter((edge) =>
    edge.node.frontmatter.lang.includes(intl.locale)
  );



  return (
    <Layout>
      <SEO
        title="Articles"
        description="All articles published by the Project"
        image="/logo.png"
        pathname="/articles"
        // Boolean indicating whether this is an article:
        // article
      />
      <Sidebar/>
      <section className={style.articlelist}>
        <h1>Articles</h1>
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
                <Link to={node.fields.slug}>
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
                  {node.frontmatter.category.map((category, index) => [
                    index > 0 && ", ",
                    <Link key={index} to={`${locale}/categories/${_.kebabCase(category)}`}>
                      {category}
                    </Link>,
                  ])}
                </div>
                <div
                  className={style.article__content}
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.description }}
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
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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