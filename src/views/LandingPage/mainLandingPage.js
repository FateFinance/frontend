import React from "react";
import './mainLandingPage.css';
import CardFeatureItem from "./CardFeatureItem";
import TitlesLandingPage from "./titlesLandingPage";
import Footer from "../../components/footer";

export default function MainLandingPage() {

    const propsData = {
        loginButton: {
            button: "Connect Wallet",
        },
        feature1: {
            managePortfolio: "Deposit Crypto",
            buyAndSellPopular: "Deposit your assets across multiple protocols throughout our dApp into our win-win Fate Vaults on Arbitrum!",
            seeExplained: "https://fate-finance.gitbook.io/fate-finance/",
            linkTitle: "Discover the concept"
        },
        feature2: {
            managePortfolio: "Earn Boosted Yield",
            buyAndSellPopular: "All assets deposited are combined to generate yield and prizes for our users. Half of the yield generated is directly sent back to the user, meanwhile the other half goes to prizes!",
            seeExplained: "https://fate-finance.gitbook.io/fate-finance/general",
            linkTitle: "Get to know the mechanisms"
        },
        feature3: {
            managePortfolio: "Win Prizes",
            seeExplained: "https://fate-finance.gitbook.io/fate-finance/prizes-and-winnings",
            buyAndSellPopular: "Every lottery draw smart-contracts randomly pick lucky users to share between them last week's generated prize pool. Different vaults exists, giving you the choice to deposit your favorite asset!",
            linkTitle: "Learn more about prizes"
        },
    };

    return (

        <div className="main">

            <TitlesLandingPage/>

            <div className="features">

                    <div className="ellipse3"></div>
                    <div className="ellipse4"></div>

                    <div className="features-title">
                        <h2 className="fate-finance-amazing">Fate Finance Features</h2>
                        <span className="explore-sensational">Discover new ways to earn passive incomes by depositing at Fate Finance!</span>
                    </div>

                    <div className="features-cards">
                        <CardFeatureItem
                            className="feature"
                            {...propsData.feature1}
                        />
                        <CardFeatureItem
                            className="feature"
                            {...propsData.feature2}
                        />
                        <CardFeatureItem
                            className="feature"
                            {...propsData.feature3}
                        />
                    </div>
                <Footer/>
            </div>

        </div>
    );
}