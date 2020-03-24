import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoList from "../components/infoList"
import { Sec, Wrap } from "../components/styled"

const NewsPage = () => {
  return (
    <Layout>
      <SEO title="Information" />
      <Sec>
        <Wrap>
          <h1 style={{ marginBottom: "40px" }}>Information</h1>
          <InfoList />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default NewsPage
