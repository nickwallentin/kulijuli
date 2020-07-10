import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

import TimeIcon from "../assets/icons/time.svg"

const ProgramItem = ({ data, temp }) => {
  const slug =
    "/program/" +
    data.Titel.replace(/([äå])+/g, "a")
      .replace(/([ö])+/g, "o")
      .replace(/\W+/g, "-")
      .toLowerCase()
  return (
    <>
      {data.Synlig ? (
        <ProgramItemCon to={slug}>
          <div className="image">
            <Img
              fluid={data.Bild.localFiles[0].childImageSharp.fluid}
              alt={data.Titel}
            />
          </div>
          <div className="content">
            <h4>{data.Titel}</h4>
          </div>
        </ProgramItemCon>
      ) : (
        <ProgramItemConNoLink>
          <div className="image">
            <Img fluid={temp} alt="Hemlig artist" />
          </div>
          <div className="content">
            <h4>Hemlig artist</h4>
            <small></small>
          </div>
        </ProgramItemConNoLink>
      )}
    </>
  )
}

const ProgramItemCon = styled(Link)`
  text-decoration: none;
  color: black;
  .image {
    margin-bottom: 15px;
    border-radius: 5px;
    overflow: hidden;
  }
  h4 {
    margin-bottom: 0px;
  }
  small {
    display: flex;
    align-items: center;
    color: #00000095;
    svg {
      width: 18px;
      height: 18px;
      margin-right: 5px;
      path {
        fill: #00000080;
      }
    }
  }
`
const ProgramItemConNoLink = styled.div`
  text-decoration: none;
  color: black;
  .image {
    margin-bottom: 15px;
    border-radius: 5px;
    overflow: hidden;
  }
  h4 {
    margin-bottom: 0px;
  }
  small {
    display: flex;
    align-items: center;
    color: #00000095;
    svg {
      width: 18px;
      height: 18px;
      margin-right: 5px;
      path {
        fill: #00000080;
      }
    }
  }
`

export default ProgramItem
