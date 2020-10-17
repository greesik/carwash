import React from 'react';
import "./AboutTile.css"

const AboutTile = ({title, description}) => {
    return (
            <div className={"about-tile"}>
                <div className="about-tile-icon">

                </div>
                <div className="about-tile-data">
                    <h2 className={"about-title"}>{title}</h2>
                    <p className={"about-description"}>{description}</p>
                </div>
            </div>
    );
};

export default AboutTile;