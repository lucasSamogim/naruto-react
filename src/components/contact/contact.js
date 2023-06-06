import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contact-container">

            <div className="container">
                <div className="sidebar"></div>
                <main className="contact-content">
                    <div className="contact-form">
                        <h1 className="hello">Say Hello!</h1>
                        <h2 className="subtitle">Please get in touch via mail or use the form below </h2>

                        <form action="./contato.html" method="get">
                            <div className="label-style">
                                <label for="name">Full Name</label>
                                <input type="text" name="name" id="name" required />
                            </div>
                            <div className="label-style">
                                <label for="email">Email Address</label>
                                <input type="email" name="email" id="email" required />
                            </div>
                            <div className="label-style">
                                <label for="msg">Message</label>
                                <input type="text" name="msg" id="msg" required />    
                            </div>
                            <div className="label-style">
                                <input type="submit" value="Send Message" id="button" />
                            </div>
                        </form>
                    </div>
                </main>
            </div>

        </div>
    );
};

export default Contact;