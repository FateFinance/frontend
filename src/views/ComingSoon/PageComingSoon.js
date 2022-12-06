import '../../index.css';
import './PageComingSoon.css';
import * as React from 'react';
import HeaderLandingPage from "../LandingPage/headerLandingPage";
import Footer from "../../components/footer";
import MainComingSoon from "./mainComingSoon";

function PageComingSoon() {
  return (
    <div className="PageComingSoon">
        <HeaderLandingPage/>
        <MainComingSoon/>
        <Footer/>
    </div>
  );
}

export default PageComingSoon;
