import React from "react";

import './titlesLandingPage.css';

export default function TitlesLandingPage() {

    return (
        <div className="main-titles">

            <div className="text-titles">
                <h2 className="stake-in-lottery-vaults">
                    Stake in our Lottery Vaults, Earn some Yield and Win Prizes
                </h2>

                <span className="only-at-fate-finance">
                        Only at Fate Finance, earn interests while participating in lotteries on Arbitrum!
                    </span>
            </div>

            <div className="button-titles">
                <a className="getStarted" href="https://twitter.com/intent/tweet?text=This%20tweet%20proves%20my%20involvement%20in%20the%20%40Fate_Finance%20project%20on%20%23Arbitrum%20%28%F0%9F%92%99%2C%F0%9F%A7%A1%29%0D%0A%0D%0AEarly%20participants%20will%20be%20rewarded...%20%F0%9F%91%80%0D%0A%0D%0ATo%20get%20to%20know%20the%20project%3A%20%0D%0Ahttps%3A%2F%2Ffate-finance.com&" target="_blank" rel="noopener noreferrer">Get Involved</a>
                <a className="join-discord" href="https://discord.gg/fatefinance" target="_blank" rel="noopener noreferrer">Join Discord</a>
            </div>

        </div>
    );
}
