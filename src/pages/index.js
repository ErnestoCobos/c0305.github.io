import React from "react"

import LayoutFullScreen from "../components/layout-fullscreen"
import SEO from "../components/seo"
import TitleAndSub from "../components/titleAndSub"

import "../sass/_global.scss"
import "../sass/_button.scss"
import C from "../constants";
import Button from "../components/button";


const IndexPage = ({path}) => {
  console.log(path)
  const data = {
    title: "COBOS",
    sub: "I’m a web developer with some full-stack chops, too. I’m passionate about web development, analytics and data management."
  }

  const seoData = {
    title: "Ernesto Cobos - a software developer",
    lang: "en_US",
    description: "Ernesto Cobos - a software developer that love to code"
  }

  return (
    <>
      <LayoutFullScreen>
        <SEO title={seoData.title}
             lang={seoData.lang}
             description={seoData.description}
        />
        <TitleAndSub title={data.title} sub={data.sub}/>
        {C.linksData.map(({name, link}, index) => {
          if (link !== "/") {
            return (
                <Button key={index} isType="link" to={link}>
                  {name}
                </Button>
            )
          }
          return null
        })}
        <div className="full-width text-center">
          <div className="social text-center">
            <ul>
              {C.socialData.map(({icon, link}, index) => {
                return (
                    <li key={index}>
                      <Button isType="social" socialIcon={icon} to={link}/>
                    </li>
                )
              })}
            </ul>
          </div>
        </div>
      </LayoutFullScreen>
    </>
  )
}


export default IndexPage
