import React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

import style from "./templates.module.css"

const BasicsNavigation = () => {

    const intl = useIntl()

    return (
    <>
        <h2 className={style.sidebar_title}>{intl.formatMessage({ id: "subnav.basics.title" })}</h2>

        <div className={style.flex_nav}>   
            <nav className={style.sidebar_nav}>
                <h3 className={style.sidebar_nav_subtitle}>{intl.formatMessage({ id: "subnav.basics.general.title" })}</h3>
                <ul className={style.sidebar_nav_list}>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/general/structure-with-the-help-of-multi-level-headings`}>
                            {intl.formatMessage({ id: "subnav.basics.general.post-headings" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/general/add-an-alt-text`}>
                            {intl.formatMessage({ id: "subnav.basics.general.post-alttext" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/general/check-semantics-and-logical-reading-order`}>
                            {intl.formatMessage({ id: "subnav.basics.general.post-check" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/general/overview-of-the-pdf-tags`}>
                            {intl.formatMessage({ id: "subnav.basics.general.post-tags" })}
                        </LocalizedLink>
                    </li>
                </ul>
            </nav>

            <nav className={style.sidebar_nav}>
                <h3 className={style.sidebar_nav_subtitle}>{intl.formatMessage({ id: "subnav.basics.indesign.title" })}</h3>
                <ul className={style.sidebar_nav_list}>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/indesign/defining-pdf-tags-in-indesign`}>
                            {intl.formatMessage({ id: "subnav.basics.indesign.post-tags" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/indesign/defining-logical-reading-order-in-indesign`}>
                            {intl.formatMessage({ id: "subnav.basics.indesign.post-order" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/indesign/defining-artifacts-in-indesign`}>
                            {intl.formatMessage({ id: "subnav.basics.indesign.post-artifacts" })}
                        </LocalizedLink>
                    </li>
                </ul>
            </nav>

            <nav className={style.sidebar_nav}>
                <h3 className={style.sidebar_nav_subtitle}>{intl.formatMessage({ id: "subnav.basics.word.title" })}</h3>
                <ul className={style.sidebar_nav_list}>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/word/defining-pdf-tags-in-word`}>
                            {intl.formatMessage({ id: "subnav.basics.word.post-tags" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/word/defining-artifacts-in-word`}>
                            {intl.formatMessage({ id: "subnav.basics.word.post-artifacts" })}
                        </LocalizedLink>
                    </li>
                </ul>
            </nav>

            <nav className={style.sidebar_nav}>
                <h3 className={style.sidebar_nav_subtitle}>{intl.formatMessage({ id: "subnav.basics.acrobat.title" })}</h3>
                <ul className={style.sidebar_nav_list}>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/acrobat/general-working-with-pdf-tags-in-acrobat`}>
                            {intl.formatMessage({ id: "subnav.basics.acrobat.post-general" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/acrobat/create-and-modify-pdf-tags-in-acrobat`}>
                            {intl.formatMessage({ id: "subnav.basics.acrobat.post-tags" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/acrobat/adjust-logical-reading-order-in-acrobat`}>
                            {intl.formatMessage({ id: "subnav.basics.acrobat.post-order" })}
                        </LocalizedLink>
                    </li>
                    <li className={style.sidebar_nav_listitem}>
                        <LocalizedLink activeClassName={`active`} to={`/basics/acrobat/create-and-check-artifacts-in-acrobat`}>
                            {intl.formatMessage({ id: "subnav.basics.acrobat.post-artifacts" })}
                        </LocalizedLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )
}

export default BasicsNavigation