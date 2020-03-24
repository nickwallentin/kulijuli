import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import InfoItem from "../components/infoItem"

const InfoList = () => {
  const data = useStaticQuery(query)
  const edges = data.allAirtable.edges
  return (
    <InfoCon>
      {edges.map(({ node: info }) => (
        <InfoItem data={info.data} />
      ))}
    </InfoCon>
  )
}

export default InfoList

const InfoCon = styled.div``

const query = graphql`
  query getAllInfo {
    allAirtable(filter: { table: { eq: "Info" } }) {
      edges {
        node {
          id
          data {
            Titel
            Body
          }
        }
      }
    }
  }
`
