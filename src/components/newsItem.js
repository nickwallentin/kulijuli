import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const NewsItem = ({ data }) => {
  const excerpt = data.Text.childMarkdownRemark.excerpt
  const slug =
    "/nyheter/" +
    data.Rubrik.replace(/([äå])+/g, "a")
      .replace(/([ö])+/g, "o")
      .replace(/\W+/g, "-")
      .toLowerCase()
  return (
    <Article to={slug}>
      <div className="article-image">
        <Img
          fluid={data.Img.localFiles[0].childImageSharp.fluid}
          alt={data.Rubrik}
        />
      </div>
      <div className="article-content">
        <h3>{data.Rubrik}</h3>
        <span>Publicerades: {data.Publicerad}</span>
        <p>{excerpt}</p>
      </div>
    </Article>
  )
}

const Article = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    .article-image {
      transform: scale(1.02);
    }
  }

  .article-image {
    transition: all 100ms;
    border-radius: 5px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .article-content {
    h3 {
      margin-bottom: 0px;
    }
    span {
      margin-bottom: 15px;
      display: block;
    }
  }
`

export default NewsItem
