import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { NoteMessage, WarningMessage } from "../components/shortcodes"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "./templates.module.css"

const shortcodes = { Link, AnchorLink, NoteMessage, WarningMessage } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
  <>
    <Seo 
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.description}
      lang={mdx.frontmatter.lang}
    />
    <Layout>
      <article className={style.post}>
        <h1 className={style.article_title}>{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
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
        lang
      }
      body
    }
  }
`