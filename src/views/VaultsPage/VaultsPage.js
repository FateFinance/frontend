import '../../index.css';
import './VaultsPage.css';
import * as React from 'react';
import Header from "../../components/header";

import Footer from "../../components/footer";
import VaultsMainPage from "./VaultsMainPage";

function VaultsPage() {
  return (
    <div className="VaultsPage">
        <Header/>
        <VaultsMainPage/>
        <Footer/>
    </div>
  );
}

export default VaultsPage;
