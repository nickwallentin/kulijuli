import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import NewsItem from "../components/newsItem"
import ProgramItem from "../components/programItem"

const RelatedItems = ({ type, date, exclude }) => {
  const data = useStaticQuery(query)
  const tempImg = data.file.childImageSharp.fluid
  const edges = data.allAirtable.edges.filter(node => {
    if (date && type === "Program") {
      if (node.node.data.Datum) {
        return (
          node.node.table === type &&
          node.node.data.Datum.split(",")[1] === date &&
          node.node.id !== exclude
        )
      }
    } else if (type) {
      return node.node.table === type && node.node.id !== exclude
    } else {
      return node
    }
  })
  console.log(edges)

  return (
    <RelatedItemsCon>
      {type === "Nyheter" ? (
        <RelatedNews>
          {edges.map(({ node: news }) => {
            return <NewsItem key={news.id} data={news.data} />
          })}
        </RelatedNews>
      ) : (
        <RelatedProgram>
          {edges.map(({ node: program }) => (
            <ProgramItem temp={tempImg} key={program.id} data={program.data} />
          ))}
        </RelatedProgram>
      )}
    </RelatedItemsCon>
  )
}

const RelatedItemsCon = styled.div``

const RelatedProgram = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
`

const RelatedNews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

export default RelatedItems

const query = graphql`
  query getAllItemsForRelatedComponent {
    file(relativePath: { eq: "KIJ_Program_temp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allAirtable(
      sort: { fields: [data___Datum, data___Publicerad], order: [ASC, DESC] }
    ) {
      edges {
        node {
          id
          table
          data {
            Beskrivning
            Synlig
            Datum(formatString: "HH:mm, D MMMM", locale: "sv")
            Titel
            Rubrik
            Publicerad(formatString: "D MMMM", locale: "sv")
            Text {
              childMarkdownRemark {
                excerpt(format: PLAIN)
              }
            }
            Bild {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            Img {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 250) {
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
