import React, { useState } from "react"
import styled from "styled-components"

import DownIcon from "../assets/icons/down.svg"
import UpIcon from "../assets/icons/up.svg"

const InfoItem = ({ data }) => {
  const [open, setOpen] = useState(false)
  return (
    <Info onClick={() => setOpen(!open)}>
      <strong>
        {data.Titel} {open ? <UpIcon /> : <DownIcon />}
      </strong>
      {open && <p>{data.Body}</p>}
    </Info>
  )
}

const Info = styled.div`
  cursor: pointer;
  border: 1px solid #d8d8d8;
  padding: 20px;
  border-radius: 5px;
  strong {
    display: block;
    display: flex;
    justify-content: space-between;
    svg {
      path {
        fill: #666666;
      }
    }
  }

  p {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  margin: 20px 0px;
`
export default InfoItem
