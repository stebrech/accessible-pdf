import React from "react"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import style from "./mainnav.module.css"

const MainNav = () => {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <Link activeClassName="active" to={`${locale}/`}>
            {intl.formatMessage({ id: "home" })}
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`${locale}/basics/indesign/defining-pdf-tags-in-indesign/`}>
           {intl.formatMessage({ id: "basics" })}
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`${locale}/glossary/`}>
           {intl.formatMessage({ id: "glossary" })}
          </Link>
        </li>
        <li>
          {intl.formatMessage({ id: "switchLanguage" })}
          <ul>
            <li>
             <Link to="/en">EN</Link>
            </li>
            <li>
             <Link to="/de-CH">DE-CH</Link>
           </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav