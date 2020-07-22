/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import constants from "../constants"
import { createButton } from "../helpers"


const Layout = ({ children, path }) => {

  let socialLinks
  socialLinks = []
  for (const [index, element] of constants.socialData.entries()) {
    socialLinks.push(createButton(element, index))
  }

  return (
    <div className="page-container">
      <Header path={path}/>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer__items">
          <div className="footer__copyright">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </div>

          <div className="footer__social">
            <div className="social text-center">
              <ul>
                {socialLinks}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
