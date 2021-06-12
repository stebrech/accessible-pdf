import React from 'react'
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"

import Layout from '../components/layout'
import Seo from '../components/seo'
import * as style from './404.module.css'

const NotFoundPage = ({ data }) => {

  const intl = useIntl()
  const image = getImage(data.dogImage)

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "error.title" })} />

      <div className={style.container}>
        <h1 className={style.title}>{intl.formatMessage({ id: "error.title" })}</h1>
        <p>{intl.formatMessage({ id: "error.description" })}</p>
        <GatsbyImage image={image} className={style.dog} alt={intl.formatMessage({ id: "error.dog" })} />
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
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`