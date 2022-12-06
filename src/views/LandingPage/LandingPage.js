import '../../index.css';
import './LandingPage.css';
import * as React from 'react';
import HeaderLandingPage from "./headerLandingPage";
import MainLandingPage from "./mainLandingPage";
import BackgroundLandingPage from "./backgroundLandingPage";

function LandingPage() {
  return (
    <div className="LandingPage">
        <BackgroundLandingPage/>
        <HeaderLandingPage/>
        <MainLandingPage/>
    </div>
  );
}

export default LandingPage;
