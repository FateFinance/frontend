import "./CardFeatureItem.css";
import * as React from 'react';

const CardFeatureItem = (props) => {
    return (
        <div className={`card-feature-item ${props.className || ""}`}>
            <span className="cardTitle">{props.managePortfolio}</span>

            <span className="cardText">{props.buyAndSellPopular}</span>

            <a className="linkTitle" href={props.seeExplained}>
                {props.linkTitle}
            </a>
        </div>
    );
};
export default CardFeatureItem;
