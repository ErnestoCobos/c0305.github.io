import React from "react"
import "../sass/_titleAndSub.scss"
import "../sass/_global.scss"

const TitleAndSub = ({ title, sub, secsub }) => (
  <div className="full-width text-center">
    <h1 className="title">{title}</h1>
    <div className="text-container">
      <h4 className="sub-title">{sub}</h4>
    </div>
    <h6>{secsub}</h6>
  </div>
)

export default TitleAndSub