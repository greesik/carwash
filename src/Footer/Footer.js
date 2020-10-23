import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <div className="made-by">Made by Grzegorz Sikora</div>
                <div className="social linkedin"></div>
                <div className="social github"></div>
            </div>
        </footer>
    );
};

export default Footer;