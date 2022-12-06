import "./VaultCard.css";
import * as React from 'react';
import logoFateFinance from "../../assets/logoFateFinance.svg";

const VaultCard = (vault) => {
    return (
        <div className={`vaultCard ${vault.className || ""}`}>

            <div className="cardLogo">
                <img className="firstLogo logo" src={logoFateFinance} alt=""/>
                <span className="x">x</span>
                <img className="secondLogo logo" src={vault.secondLogo} alt=""/>
            </div>

            <div className="dataCustomer">

                <div className="win_deposit_column">
                    <div className="win">
                        <div className="winTitle cardTitle">WIN</div>
                        <div className="winNumber cardNumbers">${vault.prizeToWin}</div>
                    </div>
                    <div className="deposit">
                        <div className="depositTitle cardTitle">YOUR DEPOSIT</div>
                        <div className="depositNumber cardNumbers">0 ${vault.token}</div>
                    </div>
                </div>

                <div className="draw_interest_column">
                    <div className="draw">
                        <div className="drawTitle cardTitle">NEXT DRAW</div>
                        <div className="drawNumber cardNumbers">{vault.next_draw}</div>
                    </div>

                    <div className="interest">
                        <div className="interestTitle cardTitle">INTEREST APY</div>
                        <div className="interestNumber cardNumbers">{vault.apy}%</div>
                    </div>
                </div>

            </div>

            <div className="button_tvl_odds">

                <a className="enterLottery" href="/">
                    <div className="enterLotteryDiv">
                        Enter with {vault.token}
                    </div>
                </a>

                <span className="vaultTvl"> TVL ${vault.tvl}</span>
                <span className="vaultOdds">1 in {vault.odds} odds per $1000 staked</span>
            </div>

        </div>
    );
};
export default VaultCard;
