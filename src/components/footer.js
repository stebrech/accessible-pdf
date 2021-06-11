import React from "react"

import * as style from "./footer.module.css"
import FooterNav from "./footernav"

const Footer = ({ siteTitle }) => (
  <footer className={style.footer}>
    <div className={style.footer_container}>
      <FooterNav />
      <div>Creative Commons Attribution 4.0 International License</div>
    </div>
  </footer>
)

export default Footer
