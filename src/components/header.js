import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import MainNav from "./mainnav"

import style from "./header.module.css"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="site-header" className={style.masthead} role="banner">
    <div className={style.masthead_info}>
      <Link to="/">
        <img
          src="/logo_accessiblePDF.svg"
          width="40"
          height="100"
          alt={siteTitle}
          className={style.site_logo}
        />
        <div className={style.site_title}>{siteTitle}</div>
        <div className={style.site_description}>{siteDescription}</div>
      </Link>
    </div>
    <MainNav/>
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
