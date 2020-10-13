import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import { note, warning } from "./ui"

import style from "./articles.module.css"

const shortcodes = { Link, note, warning } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
        <div>
            <h1>{mdx.frontmatter.title}</h1>
            <p className={style.article_metadata}>
              <span className={style.article_author}>written by {mdx.frontmatter.author}</span><br/>
              <span className={style.article_author}>last updated on {mdx.frontmatter.date}</span>
            </p>
            <p className={style.article_lead}>{mdx.frontmatter.description}</p>
            <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        author
        date
      }
    }
  }
`