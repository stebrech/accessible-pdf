import React from "react"

import style from "./footer.module.css"
import FooterNav from "./footernav"

const Footer = ({ siteTitle }) => (
  <footer className={style.footer}>
    <div className={style.footer_container}>
      <FooterNav />
      <div className={style.copyright}>Creative Commons Attribution 4.0 International License</div>
    </div>
  </footer>
)

export default Footer
