import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useIntl, FormattedDate } from "react-intl"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Coffee from "../components/buymeacoffee"
import { NoteMessage, WarningMessage } from "../components/shortcodes"

import style from "./templates.module.css"
import BasicsNavigation from "./basics.navigation"

const shortcodes = { Link, NoteMessage, WarningMessage } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  const intl = useIntl()
  return (
    <>
      <SEO 
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        lang={mdx.frontmatter.lang}
      />
      <Layout>
        <>
          <a className="skip-link screen-reader-text" href="#article-title">
            {intl.formatMessage({ id: "skip.article" })}
          </a>

          <aside className={style.sidebar}>
            <BasicsNavigation/>
          </aside>

          <article className={style.basics}>
            <div className={style.maincontent}>
              <h1 className={style.article_title}>{mdx.frontmatter.title}</h1>
              <p className={style.article_metadata}>
                <span className={style.article_author}>
                  {intl.formatMessage({ id: "article.meta.author" })} {mdx.frontmatter.author}
                </span><br/>
                <span className={style.article_author}>
                  {intl.formatMessage({ id: "article.meta.updated" })} <FormattedDate value={mdx.frontmatter.date}/>
                </span>
              </p>
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
            <Coffee/>
          </article>
        </>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
      ) {
      fields {
        locale
      }
      frontmatter {
        slug
        title
        description
        author
        date
        lang
      }
      body
    }
  }
`