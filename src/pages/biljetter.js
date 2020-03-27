import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrap, Sec } from "../components/styled"

const TicketPage = () => {
  return (
    <Layout>
      <SEO title="Biljetter 2020" />
      <Wrap>
        <Sec>
          <h1>Biljetter</h1>
          <p>
            Biljettförsäljning har inte startat ännu. Kom tillbaka senare eller
            följ oss på{" "}
            <a
              href="https://www.facebook.com/kulijulinojesgrytan"
              rel="noreferrer noopener"
              target="_blank"
            >
              Facebook
            </a>{" "}
            och{" "}
            <a
              href="https://www.instagram.com/kulijulinojesgrytan/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>{" "}
            för att få reda på när försäljningen öppnar.
          </p>
        </Sec>
      </Wrap>
    </Layout>
  )
}
export default TicketPage
