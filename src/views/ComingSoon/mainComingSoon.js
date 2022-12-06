import './mainComingSoon.css';
import * as React from 'react';
import imgHourglass from "../../assets/hourglass.png";

function MainComingSoon() {
    return (
        <div className="MainComingSoon">

            <div className="ellipse7"></div>
            <div className="ellipse8"></div>
            <div className="ellipse9"></div>

            <div className="contentComingSoon">
                <img className="imgHourglass1" src={imgHourglass} alt=""/>
                <h1 className="Title1ComingSoon">COMING SOON</h1>
                <img className="imgHourglass2" src={imgHourglass} alt=""/>
            </div>
        </div>
    );
}

export default MainComingSoon;