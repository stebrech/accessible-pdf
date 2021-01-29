import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "react-intl"

import Layout from '../components/layout'
import SEO from '../components/seo'
import style from './404.module.css'

const NotFoundPage = ({ data }) => {

  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "error.title" })} />

      <div className={style.container}>
        <h1 className={style.title}>{intl.formatMessage({ id: "error.title" })}</h1>
        <p className={style.description}>{intl.formatMessage({ id: "error.description" })}</p>
        <Img className={style.dog} fluid={data.dogImage.childImageSharp.fluid} alt={intl.formatMessage({ id: "error.dog" })} />
      </div>
    </Layout>
  )
}
export default NotFoundPage

export const query = graphql`
  {
    dogImage: file(
      relativePath: { eq: "dog.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`