import React from 'react';
import "./Header.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {

    return (
        <header className={"header"}>
            <div className={"header-container"}>
                <nav className={"navbar"}>
                    <AnchorLink offset={100} classname={"anchor"} href={"#about"}><div className={"nav-element nav-about"}>Dlaczego my?</div></AnchorLink>
                    <AnchorLink offset={100} classname={"anchor"} href={"#contact"}><div className={"nav-element nav-contact"}>Kontakt</div></AnchorLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;