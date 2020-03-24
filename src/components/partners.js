import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Partners = ({ margin, cols, mCols, width, type }) => {
  const data = useStaticQuery(query)
  const partners = data.allAirtable.edges.filter(node => {
    if (type) {
      console.log(node)
      return node.node.data.Typ === type
    } else {
      return node
    }
  })
  return (
    <PartnersContainer margin={margin} width={width} cols={cols} mCols={mCols}>
      {partners.map(({ node: partner }) => (
        <Partner
          href={partner.data.HemsidaURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            fluid={partner.data.Logo.localFiles[0].childImageSharp.fluid}
            alt={partner.data.F_retag + " logotyp"}
          />
        </Partner>
      ))}
    </PartnersContainer>
  )
}

const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.cols || "1fr 1fr"};
  grid-gap: 20px;
  width: ${props => props.width || "100%"};
  margin: ${props => props.margin || "0 auto"};
  @media screen and (max-width: 785px) {
    grid-template-columns: ${props => props.mCols || "1fr 1fr"};
  }
`
const Partner = styled.a``

export default Partners

const query = graphql`
  query getPartners {
    allAirtable(filter: { table: { eq: "Sponsorer" } }) {
      edges {
        node {
          id
          data {
            F_retag
            Typ
            HemsidaURL
            Logo {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
