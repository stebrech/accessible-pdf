import React from 'react'
import { LocalizedLink } from "gatsby-theme-i18n"
import PropTypes from 'prop-types'

import * as style from "./header.module.css"

import MainNav from "./mainnav"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="site-header" className={style.masthead} role="banner">
    <div className={style.header_container}>
      <div className={style.masthead_info}>
        <LocalizedLink to="/">
          <img
            src="/images/logo_accessiblePDF.svg"
            width="40"
            height="100"
            alt={siteTitle}
            className={style.site_logo}
          />
          <div className={style.site_title}>{siteTitle}</div>
          <div>{siteDescription}</div>
        </LocalizedLink>
      </div>
      <MainNav/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
