import React from "react"
import { Link } from "gatsby"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

import style from "./mainnav.module.css"

const MainNav = () => {

  const intl = useIntl()

  return (
    <nav className={style.mainnav}>
      <ul>
        <li className={style.menuitem}>
          <LocalizedLink activeClassName="active" to={`/basics/general/structure-with-the-help-of-multi-level-headings/`}>
            {intl.formatMessage({ id: "menuLink.basics" })}
          </LocalizedLink>
        </li>
        <li className={style.menuitem}>
          <LocalizedLink activeClassName="active" to={`/tutorials/general/document-title-is-not-set/`}>
            {intl.formatMessage({ id: "menuLink.tutorials" })}
          </LocalizedLink>
        </li>
        <li className={style.menuitem}>
          <LocalizedLink activeClassName="active" to={`/glossary/`}>
            {intl.formatMessage({ id: "menuLink.glossary" })}
          </LocalizedLink>
        </li>
      </ul>
      <ul>
        <li className={style.lang}>
          <Link to="/">EN</Link>
        </li>
        <li className={style.lang}>
          <Link to="/de">DE</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav