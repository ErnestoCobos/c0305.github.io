import React from "react"

import "../sass/global.scss"
import PropTypes from "prop-types"

const LayoutFullScreen = ({ children }) => {
  return (
    <>
      <div className="full-height is-relative has-background-blue">
        <main className="is-vertical-center">{children}</main>
      </div>
    </>
  )
}

LayoutFullScreen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutFullScreen
