import '../../index.css';
import './PageNotFound.css';
import * as React from 'react';
import HeaderLandingPage from "../LandingPage/headerLandingPage";
import MainPageNotFound from "./mainPageNotFound";
import Footer from "../../components/footer";

function PageNotFound() {
  return (
    <div className="PageNotFound">
        <HeaderLandingPage/>
        <MainPageNotFound/>
        <Footer/>
    </div>
  );
}

export default PageNotFound;
