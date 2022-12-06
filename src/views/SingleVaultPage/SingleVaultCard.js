import './SingleVaultCard.css';
import * as React from 'react';

const SingleVaultCard = (vaultInfos) => {
    return (
        <div className="SingleVaultCard">

            <div className="dataVault">

                <div className="draw_deposit_column">

                    <div className="draw">
                        <div className="alignLeft drawTitle singleCardTitle">NEXT DRAW</div>
                        <div className="alignLeft drawNumber singleCardNumber">{vaultInfos.next_draw}</div>
                    </div>

                    <div className="deposit">
                        <div className="alignLeft depositTitle singleCardTitle">YOUR DEPOSIT</div>
                        <div className="alignLeft depositNumber singleCardNumber">0 ${vaultInfos.token}</div>
                    </div>
                </div>

                <div className="win_interest_column">
                    <div className="win">
                        <div className="alignRight winTitle singleCardTitle">TVL</div>
                        <div className="alignRight winNumber singleCardNumber">${vaultInfos.tvl}</div>
                    </div>

                    <div className="interest">
                        <div className="alignRight interestTitle singleCardTitle">INTEREST APY</div>
                        <div className="alignRight interestNumber singleCardNumber">{vaultInfos.apy}%</div>
                    </div>
                </div>

            </div>

            <div className="separator winnersAndOdds">

                <span className="winnersAndPrize"> 5 WINNERS OF ${vaultInfos.prizeToWin} EACH</span>
                <span className="vaultOdds">1 in {vaultInfos.odds} odds per $1000 staked</span>
            </div>

            <div className="separator depositDiv">

                <span className="depositAreaTitle"> DEPOSIT</span>

                <div className="tokensToDepositDiv">
                    <img className="logoToken" src={vaultInfos.secondLogo} alt=""/>
                    <input className="numberOfTokensToDeposit input" placeholder="0" type="number"/>
                    <button className="maxTokensToDeposit" >MAX</button>
                </div>

                <button className="buttonDeposit" >Deposit {vaultInfos.token}</button>

                <span className="fairnessFeeText">To make the game fair, there is a 10 day Fairplay Time Lock.
                    <br/>
                    If you want to withdraw earlier you’ll pay a 2.5%, or less, Fairness Fee.
                </span>

            </div>

            <div className="separator withdrawDiv">

                <span className="depositAreaTitle"> WITHDRAW</span>

                <div className="depositedTokensStats">

                    <div className="depositedTokensStatsLeft alignLeft">
                        <div className="alignLeft currentDepositedStats">My {vaultInfos.token}</div>
                        <div className="alignLeft currentDepositedStats">My Fairplay Timelock</div>
                        <div className="alignLeft currentDepositedStats">My Fairness Fee</div>
                    </div>

                    <div className="depositedTokensStatsRight alignRight">
                        <div className="alignRight currentDepositedStats">{vaultInfos.depositedTokens}</div>
                        <div className="alignRight currentDepositedStats">{vaultInfos.fairplayTimelock}</div>
                        <div className="alignRight currentDepositedStats">{vaultInfos.currentFairnessFee} {vaultInfos.token}</div>
                    </div>

                </div>

                <div className="tokensToDepositDiv">
                    <img className="logoToken" src={vaultInfos.secondLogo} alt=""/>
                    <input className="numberOfTokensToWithdraw input" placeholder="0" type="number"/>
                    <button className="maxTokensToDeposit" >MAX</button>
                </div>

                <button className="buttonDeposit" >Withdraw {vaultInfos.token}</button>

                <span className="fairnessFeeText">
                    Fairplay Timelock rules apply.
                </span>

            </div>

        </div>
    );
}

export default SingleVaultCard;
