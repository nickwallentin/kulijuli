import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const AuthorAvatar = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Kulijuli avatar" />
}

export default AuthorAvatar

const query = graphql`
  query getAvatarImage {
    file(name: { eq: "KIJ_avatar" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
