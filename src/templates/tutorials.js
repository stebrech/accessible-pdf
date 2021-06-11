import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useIntl, FormattedDate } from "react-intl"

import Coffee from "../components/buymeacoffee"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { NoteMessage, WarningMessage } from "../components/shortcodes"

import TutorialsNavigation from "./tutorials.navigation"
import * as style from "../components/layout.module.css"

const shortcodes = { Link, NoteMessage, WarningMessage } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  const intl = useIntl()
  return (
    <>
      <Seo 
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        lang={mdx.frontmatter.lang}
      />
      <Layout>

        <article className={style.tutorials}>
          <div className={style.maincontent}>
            <h1 className={style.article_title}>{mdx.frontmatter.title}</h1>
            <p className={style.article_metadata}>
              <span>
                {intl.formatMessage({ id: "article.meta.author" })} {mdx.frontmatter.author}
              </span><br/>
              <span>
                {intl.formatMessage({ id: "article.meta.updated" })} <FormattedDate value={mdx.frontmatter.date}/>
              </span><br/>
              <span>
                {intl.formatMessage({ id: "article.meta.category" })} {mdx.frontmatter.category}
              </span>
            </p>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
          <Coffee/>
        </article>

        <aside className={style.sidebar}>
          <TutorialsNavigation/>
        </aside>

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
        category
      }
      body
    }
  }
`