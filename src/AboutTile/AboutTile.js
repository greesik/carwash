import React from 'react';
import "./AboutTile.css"

const AboutTile = ({title, description}) => {
    return (
            <div className={"about-tile"}>
                <h2 className={"about-title"}>{title}</h2>
                <p className={"about-description"}>{description}</p>
            </div>
    );
};

export default AboutTile;