import React from "react"

import LayoutFullScreen from "../components/layout-fullscreen"
import SEO from "../components/seo"
import TitleAndSub from "../components/titleAndSub"

import "../sass/global.scss"
import "../sass/_button.scss"
import constants from "../constants"
import { createButton } from "../helpers"


const IndexPage = () => {
  const data = {
    title: "COBOS",
    sub: "I’m a web developer with some full-stack chops, too. I’m passionate about web development, analytics and data management."
  }

  const seoData = {
    title: "Ernesto Cobos - a software developer",
    lang: "en_US",
    description: "Ernesto Cobos - a software developer that love to code"
  }

  const socialLinks = []
  const links = []

  for (const [index, element] of constants.linksData.entries()) {
    if (element.link !== "/") {
      links.push(createButton(element, index))
    }
  }

  for (const [index, element] of constants.socialData.entries()) {
    socialLinks.push(createButton(element, index))
  }

  return (
    <>
      <LayoutFullScreen>
        <SEO title={seoData.title}
             lang={seoData.lang}
             description={seoData.description}
        />
        <TitleAndSub title={data.title} sub={data.sub}/>
        {links}
        <div className="full-width text-center">
          <div className="social text-center">
            <ul>
              {socialLinks}
            </ul>
          </div>
        </div>
      </LayoutFullScreen>
    </>
  )
}


export default IndexPage
