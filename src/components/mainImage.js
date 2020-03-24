import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MainImage = () => {
  const data = useStaticQuery(query)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Kulijuli 2020" />
}

const query = graphql`
  query getMainImage {
    file(name: { eq: "kij-temp-image" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default MainImage
