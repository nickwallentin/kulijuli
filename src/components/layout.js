import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import { Wrap, Sec } from "../components/styled"
import "./layout.css"

import CloseIcon from "../assets/icons/close.svg"

const Layout = ({ children }) => {
  const Links = [
    { name: "Program", url: "/program" },
    { name: "Nyheter", url: "/nyheter" },
    { name: "Info", url: "/info" },
    { name: "Sponsorer", url: "/sponsorer" },
  ]

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Fragment>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} links={Links} />
      <div>
        <main>{children}</main>
        <Footer>
          <Wrap>
            <span>© {new Date().getFullYear()} Kulijuli. info@kulijuli.se</span>
            <span> Skapad av Creandia</span>
          </Wrap>
        </Footer>
      </div>

      {menuOpen && (
        <MobileMenu>
          <div className="top">
            Meny{" "}
            <span onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </span>
          </div>
          <div className="content">
            {Links.map(link => (
              <Link
                activeStyle={{ color: "var(--c-green)", fontWeight: "500" }}
                to={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </MobileMenu>
      )}
    </Fragment>
  )
}

export default Layout

const MobileMenu = styled.div`
  width: 100%;

  height: 100vh;
  position: fixed;
  top: 0px;
  right: 0px;
  background: white;
  & > div {
    padding: 20px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    background: #00000010;
  }
  .content {
    a {
      display: block;
      padding: 10px 0px;
      color: black;
      text-decoration: none;
      font-size: 18px;
    }
  }
`
const Footer = styled.div`
  padding: 20px 0px;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`

const GlobalMessage = styled(Link)`
  padding: 10px;
  background: red;
  color: white;
  font-size: 1rem;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
`
