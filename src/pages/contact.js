import React from "react"
import Layout from "../components/layout"
import Button from "../components/button";

const ContactPage = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const endMessage = React.useRef()
    const handleSubmit = (event) => {
        event.preventDefault()

        endMessage.current.classList.remove("hide")
    }
    return (
        <>
            <Layout path="contact">
                <div className="title">
                    Contact Me
                </div>
                <div className="is-ful-height">
                    <div className="is-flex is-flex--col full-width form-container ">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="sub-title">
                                <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,
                                    fill up the awesome form below or send an email to <a
                                        href="mailto:ernesto@cobos.io"> ernesto@cobos.io</a> and let's talk.</p>
                            </div>
                            <div className="top-space is-relative">
                                <div ref={endMessage} className="hide onSubmit">
                                    <h1>
                                        Thank you for your message. it has been sent
                                    </h1>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="name">Name*</label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                    <div>
                            <textarea
                                id="message"
                                rows="8"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                                    </div>
                                </div>
                                <Button type="submit">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ContactPage
