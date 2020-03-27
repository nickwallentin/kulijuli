import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Partners from "../components/partners"
import { Sec, Wrap } from "../components/styled"

const ProgramPage = () => {
  return (
    <Layout>
      <SEO title="Sponsorer 2020" />
      <Sec>
        <Wrap>
          <h1>Sponsorer 2020</h1>
        </Wrap>
      </Sec>
      <Sec>
        <Wrap>
          <h2>Guldsponsorer</h2>
          <Partners type="Guldsponsor" cols="1fr 1fr" mCols="1fr 1fr" />
        </Wrap>
      </Sec>
      <Sec>
        <Wrap>
          <h2>Sponsorer</h2>
          <Partners type="Sponsor" cols="1fr 1fr 1fr 1fr" mCols="1fr 1fr 1fr" />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default ProgramPage
