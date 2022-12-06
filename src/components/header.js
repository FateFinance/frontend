import React from "react";
import logoFateFinance from "../assets/logoFateFinance.svg"
import './header.css';
import $ from 'jquery';
window.$ = $;

$(document).bind("mobileinit", function () {
    // jQuery Mobile's Ajax navigation does not work in all cases (e.g.,
    // when navigating from a mobile to a non-mobile page), especially when going back, hence disabling it.
    $.extend($.mobile, {
        ajaxEnabled: false
    });
});

function initNavbar(){
    // 0 = hide, 1 = visible
    let menuState = 1;
    $(".links").slideDown("slow");
    const hamburger = $(".nav-hamburger");
    hamburger.toggleClass('change');

    /* Add a Click event listener to btn-select */
    hamburger.on("click",function(e) {

        e.preventDefault(); // this prevents postback

        $(e.target).toggleClass('change');

        if(menuState === 0) {
            $(".links").slideDown("slow");
            menuState = 1;
        } else {
            $(".links").slideUp("slow");
            menuState = 0;
        }
    });
}

$(document).ready(function () {
    initNavbar();
});


export default function Header() {

    return (

        <div className="header">
            <nav className="navbar-menu">

                <a className="logo" href="/home">
                    <img className="img_logo" src={logoFateFinance} alt=""/>
                    <p className="title-logo">Fate<br/>Finance</p>
                </a>

                <div className="nav-menu-select">
                    <a className="nav-hamburger" href="#top">
                        <div className="hamburger bar1"></div>
                        <div className="hamburger bar2"></div>
                        <div className="hamburger bar3"></div>
                    </a>
                </div>

                <ul className="links">
                    <li>
                        <a className="title-header home" href="/home">Home</a>
                    </li>
                    <li>
                        <a className="title-header vaults" href="/vaults">Vaults</a>
                    </li>
                    <li>
                        <a className="title-header vote" href="/vote">Vote</a>
                    </li>
                    <li>
                        <a className="title-header docs" href="https://fate-finance.gitbook.io/fate-finance/" target="_blank" rel="noopener noreferrer">Docs</a>
                    </li>
                </ul>
                <a className="button-connect" href="#top">
                    <button className="button-connect-wallet">Connect Wallet</button>
                </a>
            </nav>
        </div>
    );
}