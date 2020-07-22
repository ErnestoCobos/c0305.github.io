import React from "react"

import "../sass/global.scss"
import PropTypes from "prop-types"

const LayoutFullScreen = ({ children }) => {
  return (
    <>
      <div className="full-height is-relative has-background-blue">
        <div>
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
