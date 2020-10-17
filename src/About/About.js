import React from 'react';
import "./About.css"
import Fade from 'react-reveal/Fade';
import AboutTile from "../AboutTile/AboutTile";

const About = () => {
    return (
        <section id={"about"}>
            <div className={"about-container"}>
                <h2 className={"why-us"}>Dlaczego my?</h2>
                <div className="tile-left tile-1">

                    <Fade left>
                        <AboutTile title={"Czas to pieniądz."} description={"1 zł = pełne 60 sekund."}/>
                    </Fade>
                    <div className="invisible-left"></div>
                </div>

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

                <div className="tile-right tile-2">
                    <div className="invisible-right"></div>
                    <Fade right>
                            <AboutTile title={"Pik-pik!"} description={"Nie szukaj gotówki."}/>
                    </Fade>

                </div>

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

                <div className="tile-right tile-3">

                    <Fade left>
                        <AboutTile title={"Przyjedź z kolegami."} description={"5 stanowisk czeka w gotowości."}/>
                    </Fade>
                    <div className="invisible-left"></div>
                </div>

            </div>
        </section>
    );
};

export default About;