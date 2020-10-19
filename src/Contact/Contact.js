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
                        <div className={"terms"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum, dignissimos fuga incidunt laudantium mollitia nesciunt nisi optio voluptas voluptates.</div>
                        <input type="checkbox"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;