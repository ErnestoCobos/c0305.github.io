import React from "react"
import PlaneIcon from "../assets/plane.svg"


import TitleAndSub from "../components/titleAndSub"
import "../sass/_404.scss"
import "../sass/global.scss"

const text = {
  title: "404 Error - This page doesn't exist",
  subtitle: "Don't worry you can always go back to the main page.",
  secsubtitle: "Just click to go back"
}

const NotFoundPage = () => (
  <>
    <div className="home-link">
      <a href="/" target="_blank" rel="noreferrer">
        <div className="full-height is-relative has-background-blue">
          <div className="is-vertical-center full-width">
            <div className="frame">
              <div className="plane-container">
                <PlaneIcon className="plane"/>
              </div>
            </div>
            <TitleAndSub title={text.title} sub={text.subtitle} secsub={text.secsubtitle}/>
          </div>
        </div>
      </a>
    </div>
  </>
)

export default NotFoundPage
