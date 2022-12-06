import '../../index.css';
import './SingleVaultPage.css';
import * as React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import SingleVaultMainPage from "./SingleVaultMainPage";
import logoFateFinance from "../../assets/logoFateFinance.svg";

const vaults = {
    vault1: {
        className: "luckyFate",
        name: "Lucky Fate",
        secondLogo: logoFateFinance,
        token: "FATE",
        prizeToWin: 94,
        next_draw: "Coming Soon!",
        depositedTokens: 0,
        apy: 20.65,
        tvl: 100_000,
        odds: 254,
        fairplayTimelock:"08d 21h 57m",
        currentFairnessFee:0.42
    }
}

function SingleVaultPage() {
    return (
        <div className="SingleVaultPage">
            <Header/>
            <SingleVaultMainPage
                className={vaults.vault1.className}
                {...vaults.vault1}/>
            <Footer/>
        </div>
    );
}

export default SingleVaultPage;
