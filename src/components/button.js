import { Link } from "gatsby"
import React from "react"

import "../sass/_button.scss"
import TwitterIcon from "../assets/twitter.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import MediumIcon from "../assets/medium.svg"
import MailIcon from "../assets/mail.svg"
import GithubIcon from "../assets/github.svg"

const LinkOrAnchor = ({ to, children, className }) => {
  if (to.includes("http") || to.includes("mailto")) {
    return <a className={className} href={to}>{children}</a>
  }
  return <Link className={className} to={to}>{children}</Link>
}

const LinkButton = ({ to, children, className }) => {
  return (
    <>
      <div className="button">
        <div className="button-container">
          <LinkOrAnchor className={`button-module ${className ? className : ""}`} to={to}>
            {children}
          </LinkOrAnchor>
        </div>
      </div>
    </>
  )
}

const SocialIcon = ({ socialIcon }) => {
  var icon

  switch (socialIcon) {
    case "twitter":
      icon = <TwitterIcon/>
      break
    case "linkedin":
      icon = <LinkedinIcon/>
      break
    case "medium":
      icon = <MediumIcon/>
      break
    case "github":
      icon = <GithubIcon/>
      break
    case "mail":
      icon = <MailIcon/>
      break
    default:
      return
  }
  return icon
}

const SocialLink = ({ socialIcon, to, className }) => {
  return (
    <>
      <LinkOrAnchor className={`button-social ${className ? className : ""}`} to={to}>
        <SocialIcon socialIcon={socialIcon}/>
      </LinkOrAnchor>
    </>
  )
}


const Button = (props) => {
  switch (props.isType) {
    case "link":
      return LinkButton(props)
    case "social":
      return SocialLink(props)
    default:
      // TODO: Add normal button
      return
  }
}

export default Button