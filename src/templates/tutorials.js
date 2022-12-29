import React from "react";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useIntl, FormattedDate } from "react-intl";

import Coffee from "../components/buymeacoffee";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { NoteMessage, WarningMessage } from "../components/shortcodes";

import TutorialsNavigation from "./tutorials.navigation";
import * as style from "./templates.module.css";

const shortcodes = { Link, NoteMessage, WarningMessage }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  const intl = useIntl();
  return (
    <>
      <Layout>
        <article className={style.tutorials}>
          <div className={style.maincontent}>
            <h1 className={style.article_title}>{mdx.frontmatter.title}</h1>
            <p className={style.article_metadata}>
              <span>
                {intl.formatMessage({ id: "article.meta.author" })} {mdx.frontmatter.author}
              </span>
              <br />
              <span>
                {intl.formatMessage({ id: "article.meta.updated" })}{" "}
                <FormattedDate value={mdx.frontmatter.date} />
              </span>
              <br />
              <span>
                {intl.formatMessage({ id: "article.meta.category" })} {mdx.frontmatter.category}
              </span>
            </p>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
          <div>
            <aside className={style.githubAside}>
              <img src="/images/github-logo.svg" alt={intl.formatMessage({ id: "github.icon" })} />
              <Link
                to={`https://github.com/pixelstrolch/accessible-pdf/blob/public/content/tutorials/${mdx.parent.relativePath}`}
              >
                {intl.formatMessage({ id: "github.edit" })}
              </Link>
            </aside>
            <Coffee />
          </div>
        </article>

        <aside className={style.sidebar}>
          <TutorialsNavigation />
        </aside>
      </Layout>
    </>
  );
}

export const Head = ({ data: { markdownRemark: post } }) => {
  <Seo title={post.frontmatter.title} description={post.frontmatter.description} />;
};

export const pageQuery = graphql`
  query ($locale: String!, $slug: String!) {
    mdx(fields: { locale: { eq: $locale } }, frontmatter: { slug: { eq: $slug } }) {
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
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`;
