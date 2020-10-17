import React from 'react';
import "./About.css"
import Fade from 'react-reveal/Fade';
import AboutTile from "../AboutTile/AboutTile";

const About = () => {
    return (
        <section className={"about"}>
            <div className={"about-container"}>
                <Fade left>
                    <AboutTile title={"Czas to pieniądz"} description={"1 zł = pełne 60 sekund"}/>
                </Fade>
                <div className="dots">
                    <Fade>
                        <div className="dot dot-1"></div>
                    </Fade>
                    <Fade>
                        <div className="dot dot-2"></div>
                    </Fade>
                    <Fade>
                        <div className="dot dot-3"></div>
                    </Fade>
                </div>
                <Fade right>
                    <div className={"about-2"}>
                        <div className={"paypass-wrapper"}>
                            <div className={"paypass-1"}></div>
                            <div className={"paypass-2"}></div>
                            <div className={"paypass-3"}></div>
                        </div>
                        <AboutTile title={"Pik-pik!"} description={"Nie szukaj gotówki"}/>
                    </div>
                </Fade>
                <div className="dots">
                    <Fade>
                        <div className="dot dot-1"></div>
                    </Fade>
                    <Fade>
                        <div className="dot dot-2"></div>
                    </Fade>
                    <Fade>
                        <div className="dot dot-3"></div>
                    </Fade>
                </div>
                <Fade left>
                    <AboutTile title={"Przyjedź z kolegami"} description={"5 stanowisk czeka w gotowości"}/>
                </Fade>

            </div>
        </section>
    );
};

export default About;