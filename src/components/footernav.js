import React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

import style from "./footernav.module.css"

const FooterNav = () => {

  const intl = useIntl()

  return (
    <nav className={style.footernav}>
      <ul>
        <li className={style.menuitem}>
          <LocalizedLink activeClassName="active" to={`/imprint/`}>
            {intl.formatMessage({ id: "menuLink.imprint" })}
          </LocalizedLink>
        </li>
        <li className={style.menuitem}>
          <LocalizedLink activeClassName="active" to={`/privacy/`}>
            {intl.formatMessage({ id: "menuLink.privacy" })}
          </LocalizedLink>
        </li>
        <li className={style.menuitem}>
          <a href="https://github.com/pixelstrolch/accessible-pdf/blob/master/CONTRIBUTING.md">
            {intl.formatMessage({ id: "menuLink.contributorsGuide" })}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNav