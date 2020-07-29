import {Link} from "gatsby"
import React from "react"

import "../sass/_global.scss"
import C from "../constants"
import Button from "./button";


const Header = ({path}) => {

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
            {C.linksData.map(({name, link}, index) => {
              if (link.includes(path)) {
                console.log(path)
                return (
                    <li key={index}>
                      <Button isType="link" className="button-module--active" to={link}>
                        {name}
                      </Button>
                    </li>
                )
              }
              return (
                  <li key={index}>
                    <Button isType="link" to={link}>
                      {name}
                    </Button>
                  </li>
              )
            })}
          </div>
        </div>
      </header>
  )
}


export default Header
