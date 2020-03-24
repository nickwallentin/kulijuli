import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import BackIcon from "../assets/icons/back.svg"

const GoBack = ({ to }) => {
  return (
    <GoBackCon to={to}>
      <BackIcon /> Gå till {to.replace("/", "")}
    </GoBackCon>
  )
}
const GoBackCon = styled(Link)`
  padding: 10px 0px;
  display: block;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`
export default GoBack
