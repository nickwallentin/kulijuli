import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoBack from "../components/goBack"
import RelatedItems from "../components/relatedItems"

import TimeIcon from "../assets/icons/time.svg"

import { Sec, Wrap } from "../components/styled"

const ProgramTemplate = ({ data }) => {
  const table = data.airtable.table
  const id = data.airtable.id
  const post = data.airtable.data
  return (
    <Layout>
      <SEO title="Nyhets" />
      <Wrap>
        <GoBack to="/program" />
      </Wrap>
      <Sec>
        <Wrap>
          <ProgramItem>
            <Img
              fluid={post.Bild.localFiles[0].childImageSharp.fluid}
              alt={post.Titel}
            />
            <div className="content">
              <h1 style={{ marginBottom: "0px" }}>{post.Titel}</h1>
              <span>
                <TimeIcon /> kl {post.Datum}
              </span>
              <p style={{ margin: "30px auto" }}>{post.Beskrivning}</p>
            </div>
          </ProgramItem>
        </Wrap>
      </Sec>
      <Sec dark>
        <Wrap>
          <h2>Fler den {post.Datum.split(",")[1]}</h2>

          <RelatedItems
            date={post.Datum.split(",")[1]}
            type={table}
            exclude={id}
          />
        </Wrap>
      </Sec>
    </Layout>
  )
}

const ProgramItem = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      display: flex;
      align-items: center;
    }
    svg {
      width: 18px;
      height: 18px;
      margin-right: 5px;
      path {
        fill: #00000060;
      }
    }
  }
  img {
    border-radius: 5px;
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

export default ProgramTemplate

export const pageQuery = graphql`
  query getProgramByID($id: String!) {
    airtable(id: { eq: $id }) {
      id
      table
      data {
        Titel
        Beskrivning
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
`
