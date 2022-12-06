import './VaultsMainPage.css';
import * as React from 'react';
import logoFateFinance from "../../assets/logoFateFinance.svg";
import VaultCard from "./VaultCard";

const vaults = {
    vault1: {
        className: "luckyFate",
        secondLogo: logoFateFinance,
        token: "FATE",
        prizeToWin: 0,
        next_draw: "Coming Soon!",
        depositedTokens: 0,
        apy: 20.65,
        tvl: 100_000,
        odds: 254
    },
    vault2: {
        className: "surprise",
        secondLogo: logoFateFinance,
        token: "???",
        prizeToWin: 0,
        next_draw: "Coming Soon!",
        depositedTokens: 0,
        apy: 20.65,
        tvl: 100_000,
        odds: 254
    },
    vault3: {
        className: "surprise",
        secondLogo: logoFateFinance,
        token: "??",
        prizeToWin: 0,
        next_draw: "Coming Soon!",
        depositedTokens: 0,
        apy: 20.65,
        tvl: 100_000,
        odds: 254
    }
};

function VaultsMainPage() {
    return (
        <div className="VaultsMainPage">
            <div className="ellipse10"></div>
            <div className="ellipse11"></div>

            <div className="vaultsStatistics">

                <div className="tvl_winners">
                    <div className="tvl">
                        <div className="totalTvl statisticsTitle">TVL</div>
                        <div className="tvlNumber numbers">$0</div>
                    </div>
                    <div className="winners">
                        <div className="uniqueWinners statisticsTitle">UNIQUE WINNERS</div>
                        <div className="winnersNumber numbers">0</div>
                    </div>
                </div>

                <div className="luckyMakingMoney">
                    <img className="logoFate" src={logoFateFinance} alt=""/>
                    <div className="titleVaults">VAULTS</div>
                </div>

                <div className="prizes">
                    <div className="won">
                        <div className="totalWon statisticsTitle">PRIZES WON</div>
                        <div className="totalWonNumber numbers">$0</div>
                    </div>

                    <div className="current">
                        <div className="currentPrizes statisticsTitle">CURRENT PRIZES</div>
                        <div className="currentPrizesNumber numbers">$0</div>
                    </div>
                </div>
            </div>

            <div className="vaultsDisplay">

                <div className="row1">

                    <VaultCard
                        className={vaults.vault1.className}
                        {...vaults.vault1}
                    />
                    <VaultCard
                        className={vaults.vault2.className}
                        {...vaults.vault2}
                    />
                    <VaultCard
                        className={vaults.vault3.className}
                        {...vaults.vault3}
                    />
                </div>

            </div>
        </div>
    );
}

export default VaultsMainPage;