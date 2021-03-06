import React, {useState} from 'react';
import "./Contact.css"
import Fade from 'react-reveal/Fade';

const Contact = () => {

    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const [phone, setPhone] = useState("");
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    return (
        <section id={"contact"}>
            <div className="contact-container">
                <div className={"contact-title"}>Masz pytania? Śmiało!</div>
                <div className={"inputs-terms-container"}>
                    <Fade left cascade>
                    <div className={"inputs-container"}>
                        <input className={"contact-input"} type="text" value={name} onChange={handleNameChange} placeholder={"Imię i nazwisko"}/>
                        <input className={"contact-input"} type="email" value={email} onChange={handleEmailChange} placeholder={"E-mail"}/>
                        <input className={"contact-input"} type="tel" value={phone} onChange={handlePhoneChange} placeholder={"Numer telefonu"} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                        <button className={"contact-button"} type={"submit"}>Wyślij</button>
                    </div>
                    </Fade>
                    <div className={"terms-container"}>
                        <div className="terms-label">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur, consectetur consequatur consequuntur corporis cumque dolorum ea enim eum facere fugiat impedit.</div>
                        <div className={"checkbox-wrapper"}>
                            <input type="checkbox" id={"terms"}/>
                            <label for={"terms"}>Akceptuję warunki</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;