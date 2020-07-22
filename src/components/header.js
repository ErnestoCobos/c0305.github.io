import { Link } from "gatsby"
import React from "react"

import "../sass/_global.scss"
import constants from "../constants"
import { createButton } from "../helpers"


const Header = ({ path }) => {

  const links = []

  for (const [index, element] of constants.linksData.entries()) {
    let button
    if (element.link.includes(path)) {
      button = createButton(element, index, "button-module--active")
    } else {
      button = createButton(element, index)
    }
    links.push(button)
  }
  return (
    <header>
      <div className="header">
        <div className="header__title">
          <Link
            to="/">
            COBOS
          </Link>
        </div>
        <div className="nav">
          {links}
        </div>
      </div>
    </header>
  )
}


export default Header
