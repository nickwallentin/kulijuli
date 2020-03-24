import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsList from "../components/newsList"
import { Sec, Wrap } from "../components/styled"

const NewsPage = () => {
  return (
    <Layout>
      <SEO title="Nyheter" />

      <Sec>
        <Wrap>
          <h1 style={{ marginBottom: "40px" }}>Nyheter</h1>
          <NewsList />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default NewsPage
