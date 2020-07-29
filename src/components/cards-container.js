import React from "react"
import "../sass/_cards-container.scss"
import Button from "./button";

const placeholder = "http://placehold.jp/600x600.png"

const CardContainer = ({img = placeholder, title = "", text = "", links = []}) => {
  return (
      <>
        <div className="cards__container">
          <div className="cards">
            <div className="cards__img">
              <img alt={title} src={img}/>
            </div>
            <div className="cards__content">
              <div className="cards__title">
                <h2>{title}</h2>
              </div>
              <div className="cards__text">
                <p>{text}</p>
              </div>
              <div className="cards__footer">
                <div className="is-flex">
                  {links.map(({link, name}, index) => {
                    return (
                        <Button key={`${index}-${name}`} isType={"link"}
                                to={link}>
                          {name}
                        </Button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default CardContainer
