import React from "react"

import TitleAndSub from "./titleAndSub"

import "../sass/global.scss"
import PropTypes from "prop-types"
import Layout from "./layout"


const LayoutFullScreen = ({ children }) => {
  return (
    <>
      <div className="full-height is-relative has-background-blue">
        <div className="is-vertical-center full-width">
          <main className="is-vertical-center full-width">{children}</main>
        </div>
      </div>
    </>
  )
}

LayoutFullScreen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutFullScreen
