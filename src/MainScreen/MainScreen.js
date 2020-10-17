import React from 'react';
import "./MainScreen.css";

const MainScreen = () => {
    return (
        <section className={"main-screen"}>
            <div className={"main-screen-container"}>
                <div className="car-wash-logo">CAR<span className={"car-wash-logo-detail"}>WASH</span> 24<span className={"car-wash-logo-detail"}>/</span>7</div>
            </div>
        </section>
    );
};

export default MainScreen;