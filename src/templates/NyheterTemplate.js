import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoBack from "../components/goBack"
import RelatedItems from "../components/relatedItems"
import { Sec, Wrap } from "../components/styled"

import AuthorAvatar from "../images/kij_avatar.jpg"

const NyheterTemplate = ({ data }) => {
  const table = data.airtable.table
  const id = data.airtable.id
  const post = data.airtable.data
  return (
    <Layout>
      <SEO title="Nyhets" />
      <Wrap>
        <GoBack to="/nyheter" />
      </Wrap>
      <Sec>
        <Wrap width="600px">
          <Article>
            <div style={{ maxWidth: "500px", margin: "0px auto 30px auto" }}>
              <span>{post.Publicerad}</span>
              <h1>{post.Rubrik}</h1>
            </div>
            <Img
              fluid={post.Img.localFiles[0].childImageSharp.fluid}
              alt={post.Rubrik}
            />

            <div
              style={{ maxWidth: "500px", margin: "30px auto" }}
              dangerouslySetInnerHTML={{
                __html: post.Text.childMarkdownRemark.html,
              }}
            />
            <div className="author">
              <img
                className="avatar"
                src={AuthorAvatar}
                alt="Publicerad av Kulijuli"
              />
              <p>
                <small>Publicerat av</small>Kulijuli
              </p>
            </div>
          </Article>
        </Wrap>
      </Sec>

      <Sec dark>
        <Wrap>
          <h2>Fler nyheter</h2>

          <RelatedItems type={table} exclude={id}></RelatedItems>
        </Wrap>
      </Sec>
    </Layout>
  )
}

const Article = styled.article`
  img {
    border-radius: 5px;
  }
  .author {
    display: flex;
    align-items: center;
    width: 500px;
    margin: 20px auto 0px auto;
    p {
      small {
        display: block;
        line-height: 0.8rem;
        color: #00000080;
      }
    }
    img.avatar {
      border-radius: 99px;
      overflow: hidden;
      width: 34px;
      height: 34px;
      margin-right: 15px;
    }
  }
`

export default NyheterTemplate

export const pageQuery = graphql`
  query getArticleByID($id: String!) {
    airtable(id: { eq: $id }) {
      id
      table
      data {
        Rubrik
        Text {
          childMarkdownRemark {
            html
          }
        }
        Publicerad(formatString: "D MMMM", locale: "sv")
        Img {
          localFiles {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
