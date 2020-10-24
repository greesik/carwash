import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <div className="made-by">Made by Grzegorz Sikora</div>
                <div className="social-wrapper">
                    <div className="social-bg social-bg-1">
                        <a href="https://www.linkedin.com/in/grzegorzsikorayeswecam/" target={"_blank"}>
                            <div className="social linkedin"></div>
                        </a>
                    </div>
                    <div className="social-bg social-bg-2">
                        <a href="https://github.com/greesik" target={"_blank"}>
                            <div className="social github"></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;