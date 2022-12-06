import * as React from "react";
import * as ReactDOMClient from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import PageComingSoon from "./views/ComingSoon/PageComingSoon";
import VaultsPage from "./views/VaultsPage/VaultsPage";
import SingleVaultPage from "./views/SingleVaultPage/SingleVaultPage";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "/home",
        element: <LandingPage/>
    },
    {
        path: "",
        element: <LandingPage/>
    },
    {
        path: "/vaults",
        element: <VaultsPage/>
    },
    {
        path: "/vote",
        element: <PageComingSoon/>
    },
    {
        path: "/single-vault",
        element: <SingleVaultPage/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]);

ReactDOMClient.createRoot(rootElement).render(
    <RouterProvider router={router} />
);
