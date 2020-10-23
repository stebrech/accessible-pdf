import React from "react"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import style from "./templates.module.css"

const BasicsNavigation = () => {
    const intl = useIntl()
    // Use language iso for the routes
    const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
    return (
    <>
        <h2 className={style.sidebar_title}>Basics Articles</h2>
        <nav className={style.sidebar_nav}>
            <h3 className={style.sidebar_nav_subtitle}>InDesign specific tutorials</h3>
            <ul className={style.sidebar_nav_list}>
                <li className={style.sidebar_nav_listitem}>
                    <Link activeClassName={`active`} to={`${locale}/basics/indesign/defining-pdf-tags-in-indesign/`}>
                        Defining PDF-Tags in InDesign
                    </Link>
                </li>
                <li className={style.sidebar_nav_listitem}>
                    <Link activeClassName={`active`} to={`${locale}/basics/indesign/defining-logical-reading-order-in-indesign/`}>
                        Defining logical reading order in InDesign
                    </Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default BasicsNavigation