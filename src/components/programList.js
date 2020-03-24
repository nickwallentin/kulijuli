import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ProgramItem from "../components/programItem"

const ProgramList = () => {
  const [filter, setFilter] = useState(null)
  const data = useStaticQuery(query)
  const tempImg = data.file.childImageSharp.fluid
  const edges = data.allAirtable.edges

  const matchEdges = edges.filter(({ node: node }) => {
    if (filter) {
      return node.data.Datum.includes(filter)
    } else {
      return node
    }
  })
  const filterDates = ["7 juli", "14 juli", "21 juli"]
  return (
    <ProgramCon>
      <DateFilter>
        <div
          className={!filter ? "active" : null}
          onClick={() => setFilter(null)}
        >
          Alla
        </div>
        {filterDates.map(date => (
          <div
            key={date}
            className={date === filter ? "active" : null}
            onClick={() => setFilter(date)}
          >
            {date}
          </div>
        ))}
      </DateFilter>
      <ProgramItems>
        {matchEdges.map(({ node: node }) => (
          <ProgramItem temp={tempImg} key={node.data.id} data={node.data} />
        ))}
      </ProgramItems>
    </ProgramCon>
  )
}

const ProgramCon = styled.div``

const ProgramItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  @media screen and (max-width: 785px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`

const DateFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;

  div {
    cursor: pointer;
    padding: 8px;
    text-align: center;
    width: 100%;
    background: #00000015;
    transition: all 100ms;

    &.active {
      background: var(--c-green);
      color: white;
    }
  }
`

const query = graphql`
  query getProgramItems {
    file(relativePath: { eq: "KIJ_Program_temp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allAirtable(
      filter: { table: { eq: "Program" } }
      sort: { fields: data___Datum, order: ASC }
    ) {
      edges {
        node {
          id
          data {
            Titel
            Beskrivning
            Synlig
            Datum(formatString: "HH:mm, D MMMM", locale: "sv")
            Bild {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500) {
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

export default ProgramList
