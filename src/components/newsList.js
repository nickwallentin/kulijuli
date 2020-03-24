import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import NewsItem from "../components/newsItem"

const NewsList = ({ limit }) => {
  const data = useStaticQuery(query)
  const edges = data.allAirtable.edges.filter((node, index) => {
    if (limit) {
      return index < limit
    } else {
      return node
    }
  })

  return (
    <NewsListCon>
      {edges.map(({ node: node }) => {
        return <NewsItem key={node.id} data={node.data} />
      })}
    </NewsListCon>
  )
}

const NewsListCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 785px) {
    grid-template-columns: 1fr;
  }
`

const query = graphql`
  query getLatestNews {
    allAirtable(
      filter: { table: { eq: "Nyheter" } }
      sort: { fields: [data___Publicerad], order: DESC }
    ) {
      edges {
        node {
          id
          data {
            Rubrik
            Publicerad(formatString: "D MMMM", locale: "sv")
            Text {
              childMarkdownRemark {
                excerpt(format: PLAIN)
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

export default NewsList
