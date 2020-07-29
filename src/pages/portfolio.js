import React from "react"
import Layout from "../components/layout"
import CardContainer from "../components/cards-container"

const PortfolioPage = () => {
    const items = [
        {
            img: "/react-redux-router-app.png",
            title: "React, router and redux demo app",
            text: "The app is pretty simple. The app is a SPA example with tree views that try to simulate some financial transactions. The app doesn't have API; it only has two fetch one for the exchange rate and other with mocked data.\n" +
                "\n" +
                "This application is made from scratch without any scaffolding",
            buttons: [
                {
                    link: "https://github.com/C0305/react-login-app-example",
                    name: "Github"
                }
            ]
        }
    ]
    return (
        <>
            <Layout path="portfolio">
                <div className="title">
                    Portfolio
                </div>
                {items.map(({img, title, text, buttons}, index) => {
                    return <CardContainer key={`${index}-${title}`}
                                          img={img}
                                          title={title}
                                          text={text}
                                          links={buttons}/>
                })}
            </Layout>
        </>
    )
}

export default PortfolioPage
