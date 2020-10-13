import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"
import { changeLocale, FormattedDate } from "gatsby-plugin-intl";
import { useEffect } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./article.module.css"

export default ({ data, pageContext }) => {

  const article = data.markdownRemark

  const { previous, next } = pageContext

  useEffect(() => {
    if (article.frontmatter.lang !== "en") {
      changeLocale(article.frontmatter.lang);
    }
  }, [article.frontmatter.lang]);

  return (
    <Layout>
      <SEO
        title={article.frontmatter.title}
        description={article.frontmatter.description}
        image="/logo.png"
        pathname={article.fields.slug}
        // Boolean indicating whether this is an article:
        article
      />
      <article className={style.article}>
        {article.frontmatter.featimg && (
          <figure className={style.featimg}>
            <Img
              fluid={article.frontmatter.featimg.childImageSharp.fluid}
              alt={article.frontmatter.title}
            />
          </figure>
        )}

        <h1 className={style.article__title}>{article.frontmatter.title}</h1>

        <div className={style.article__meta}>
          by {article.frontmatter.author}. Published{" "}
          <time>
            <FormattedDate
              value={new Date(article.frontmatter.date)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </time>
        </div>
        <div className={style.article__tax}>
          Filed under:{" "}
          {article.frontmatter.category.map((category, index) => [
            index > 0 && ", ",
            <Link key={index} to={`/category/${_.kebabCase(category)}`}>
              {category}
            </Link>,
          ])}
        </div>
        <div className={style.article__lead}>
          {article.frontmatter.description}
        </div>
        <div
          className={style.article__content}
          // See https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        category
        author
        description
        lang
        featimg {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
