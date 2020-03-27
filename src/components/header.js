import React, { Fragment } from "react"
import Media from "react-media"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../assets/KIJ_logo.svg"

import { Wrap } from "../components/styled"

import MenuIcon from "../assets/icons/menu.svg"

const Header = ({ links, menuOpen, setMenuOpen }) => (
  <HeaderCon>
    <Wrap>
      <Link to="/">
        <Logo id="logo" />
      </Link>
      <Media
        query="(min-width: 786px)"
        render={() => (
          <Fragment>
            <nav>
              {links.map(link => (
                <Link
                  activeStyle={{ fontWeight: "500" }}
                  key={link.name}
                  to={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div id="nav-cta">
              <a href="/biljetter" rel="noopener noreferrer">
                Köp biljetter
              </a>
            </div>
          </Fragment>
        )}
      />
      <Media
        query="(max-width: 785px)"
        render={() => (
          <span onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </span>
        )}
      />
    </Wrap>
  </HeaderCon>
)

const HeaderCon = styled.header`
  padding: 15px 0px;
  ${Wrap} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav {
    width: 100%;
    margin: 0px 20px;

    a {
      margin: 0px 10px;
      text-decoration: none;
      color: black;
    }
  }
  #logo {
    width: 200px;
  }
  #nav-cta {
    padding: 10px;
    background: var(--c-yellow);
    width: 250px;
    text-align: center;
    border-radius: 5px;
    a {
      color: black;
      font-weight: 500;
      font-size: 0.8rem;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
`

export default Header
