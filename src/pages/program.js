import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgramList from "../components/programList"
import { Sec, Wrap } from "../components/styled"

const ProgramPage = () => {
  return (
    <Layout>
      <SEO title="Program 2020" />
      <Sec>
        <Wrap>
          <h1 style={{ marginBottom: "40px" }}>Program 2020</h1>
          <ProgramList />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default ProgramPage
