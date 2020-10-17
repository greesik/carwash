import React, {useState} from 'react';
import "./Contact.css"

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
        <section className={"contact"}>
            <div className="contact-container">
                <div>Masz pytania? Śmiało!</div>
                <div className={"inputs-terms-container"}>
                    <div className={"inputs-container"}>
                        <input type="text" value={name} onChange={handleNameChange}/>
                        <input type="email" value={email} onChange={handleEmailChange}/>
                        <input type="tel" value={phone} onChange={handlePhoneChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                        <button type={"submit"}>Wyślij</button>
                    </div>
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