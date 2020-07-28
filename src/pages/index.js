import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"

import NewsList from "../components/newsList"
import ProgramList from "../components/programList"
import Partners from "../components/partners"

import { Sec, Wrap, Grid } from "../components/styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Sommarens höjdpunkt" />
    <Sec>
      <Wrap>
        <Grid cols="1fr 1fr">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1>
              Sommarens höjdpunkt.
              <span>Hx-grytan 2020</span>
            </h1>

            <a
              href="/nyheter/har-ar-artisterna-som-ska-vara-med-i-digitala-hx-grytan-pa-arenan"
              className="cta"
            >
              Läs mer om Hx-grytan
            </a>
            <div style={{ margin: "15px 0px" }}>
              <Partners
                width="400px"
                margin="30px 0px 0px 0px"
                type="Guldsponsor"
              />
            </div>
          </div>
          <div>
            <MainImage />
          </div>
        </Grid>
      </Wrap>
    </Sec>

    <Sec>
      <Wrap>
        <h2>Senaste nytt</h2>
        <NewsList limit={2} />
      </Wrap>
    </Sec>
    <Sec dark>
      <Wrap>
        <h2>Artister på Hx-grytan</h2>
        <ProgramList />
      </Wrap>
    </Sec>
    <Sec>
      <Wrap>
        <h2>Sponsorer</h2>
        <Partners cols="1fr 1fr 1fr 1fr" />
      </Wrap>
    </Sec>
  </Layout>
)

export default IndexPage
