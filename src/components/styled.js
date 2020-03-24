import styled from "styled-components"

export const Wrap = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: ${props => props.width || "1080px"};
`

export const Sec = styled.div`
  padding: 4vmax 0px;
  background: ${props => (props.dark ? "#00000009" : "#ffffff")};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.cols || "1fr"};
  grid-gap: 30px;

  @media screen and (max-width: 785px) {
    grid-template-columns: ${props => props.mCols || "1fr"};
    grid-gap: 20px;
  }
`
