import Button from "./components/button"
import React from "react"

export function createButton({ link, name, icon }, index, cssClass) {
  if (icon) {
    return (
      <>
        <li key={index}>
          <Button isType="social" className={cssClass} socialIcon={icon} to={link}/>
        </li>
      </>
    )
  }
  return (
    <>
      <div className="item-container">
        <Button isType="link" to={link} className={cssClass} key={index}>{name}</Button>
      </div>
    </>
  )
}

