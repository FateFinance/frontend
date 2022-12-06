import './SingleVaultMainPage.css';
import * as React from 'react';
import logoFateFinance from "../../assets/logoFateFinance.svg";
import SingleVaultCard from "./SingleVaultCard";

const SingleVaultMainPage = (vaultInfos) => {
    return (
        <div className="SingleVaultMainPage">

            <div className="ellipse10"></div>
            <div className="ellipse11"></div>

            <div className="vaultStatistics">

                <div className="luckyMakingMoney">
                    <img className="vaultLogo" src={logoFateFinance} alt=""/>
                    <div className="titleVaults">{vaultInfos.name}</div>
                    <div className="titleVaults">Vault</div>
                </div>

                <div className="vaultInfos">
                    Deposit {vaultInfos.token}
                    <br/>
                    <br/>
                    Earn {vaultInfos.apy}% APY
                    <br/>
                    and a chance to win ${vaultInfos.prizeToWin}
                </div>
            </div>

            <SingleVaultCard
                {...vaultInfos}
            />


        </div>
    );
}

export default SingleVaultMainPage;