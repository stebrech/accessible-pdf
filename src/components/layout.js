import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { useIntl } from "react-intl"

import Header from './header'
import Footer from './footer'

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../styles/general.css"
import style from './layout.module.css'

const Layout = ({ children }) => {
  const intl = useIntl()

  return(
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <a className="skip-link screen-reader-text" href="#primary">
            {intl.formatMessage({ id: "skip.content" })}
          </a>
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
          />
          <main id="primary" className={style.site_main}>
            {children}
          </main>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
