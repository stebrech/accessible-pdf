import React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

import style from "./templates.module.css"

const TutorialsNavigation = () => {

  const intl = useIntl()

  return (
  <>
    <h2 className={style.sidebar_title}>{intl.formatMessage({ id: "subnav.tutorials.title" })}</h2>

    <div className={style.flex_nav}>
      <nav className={style.sidebar_nav}>
        <h3 className={style.sidebar_nav_subtitle}>{intl.formatMessage({ id: "subnav.tutorials.general.title" })}</h3>
        <ul className={style.sidebar_nav_list}>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/general/document-title-is-not-set`}>
              {intl.formatMessage({ id: "subnav.tutorials.general.post-doctitle" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/general/incorrect-display-order-makes-contents-disappear`}>
              {intl.formatMessage({ id: "subnav.tutorials.general.post-displayorder" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/general/list-is-not-tagged-as-list`}>
              {intl.formatMessage({ id: "subnav.tutorials.general.post-taggedlist" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/general/pdf-ua-identifier-is-missing`}>
              {intl.formatMessage({ id: "subnav.tutorials.general.post-uaidentifier" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/general/skipped-heading-levels`}>
              {intl.formatMessage({ id: "subnav.tutorials.general.post-skippedheadings" })}
            </LocalizedLink>
          </li>
        </ul>
      </nav>

      <nav className={style.sidebar_nav}>
        <h3 className={style.sidebar_nav_subtitle}>{intl.formatMessage({ id: "subnav.tutorials.indesign.title" })}</h3>
        <ul className={style.sidebar_nav_list}>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/indesign/anchored-objects-not-tagged`}>
              {intl.formatMessage({ id: "subnav.tutorials.indesign.post-anchoredobjects" })}
            </LocalizedLink>
          </li>
        </ul>
      </nav>

      <nav className={style.sidebar_nav}>
        <h3 className={style.sidebar_nav_subtitle}>{intl.formatMessage({ id: "subnav.tutorials.word.title" })}</h3>
        <ul className={style.sidebar_nav_list}>
        <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/word/divided-block-elements`}>
              {intl.formatMessage({ id: "subnav.tutorials.word.post-dividedelements" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/word/document-is-not-the-top-level-tag`}>
              {intl.formatMessage({ id: "subnav.tutorials.word.post-documenttag" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/word/figure-without-bounding-box`}>
              {intl.formatMessage({ id: "subnav.tutorials.word.post-boundingbox" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/word/heading-tags-instead-of-toci-within-toc`}>
              {intl.formatMessage({ id: "subnav.tutorials.word.post-headingtoci" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/word/image-as-block-element`}>
              {intl.formatMessage({ id: "subnav.tutorials.word.post-imageblock" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/word/no-figure-tag-in-compatibility-mode`}>
              {intl.formatMessage({ id: "subnav.tutorials.word.post-figurecompatibilitymode" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/word/tagged-image-in-header-or-footer`}>
              {intl.formatMessage({ id: "subnav.tutorials.word.post-imageheader" })}
            </LocalizedLink>
          </li>
          <li className={style.sidebar_nav_listitem}>
            <LocalizedLink activeClassName={`active`} to={`/tutorials/word/tagged-table-lines`}>
              {intl.formatMessage({ id: "subnav.tutorials.word.post-tablelines" })}
            </LocalizedLink>
          </li>
        </ul>
      </nav>
    </div>
  </>
  )
}

export default TutorialsNavigation