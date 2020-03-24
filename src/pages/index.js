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
    <SEO title="Home" />
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
              <span>Kulijuli 2020</span>
            </h1>

            <a href="#" className="cta">
              Köp biljetter
            </a>
            <div style={{ margin: "15px 0px" }}>
              <Partners
                width="400px"
                margin="30px 0px 0px 0px"
                type="Guldsponsor"
              />
            </div>
          </div>
          <div>Bild</div>
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
        <h2>Program</h2>
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
