/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const Links = [
    { name: "Program", url: "/program" },
    { name: "Nyheter", url: "/nyheter" },
    { name: "Info", url: "/info" },
    { name: "Sponsorer", url: "/sponsorer" },
  ]
  return (
    <Fragment>
      <Header links={Links} />
      <div>
        <main>{children}</main>
        <footer>Skapad av Creandia</footer>
      </div>
    </Fragment>
  )
}

export default Layout
