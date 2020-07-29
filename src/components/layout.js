/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import C from "../constants"
import Button from "./button";


const Layout = (props) => {
    return (
        <div className="page-container">
            <Header path={props.path}/>
            <main>{props.children}</main>
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
                                {C.socialData.map(({icon, name, link}, index) => {
                                    return (
                                        <li key={`${index}-${icon}`}>
                                            <Button isType="social" socialIcon={icon} to={link}/>
                                        </li>
                                    )
                                })}
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
