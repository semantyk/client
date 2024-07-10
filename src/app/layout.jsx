/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx`
 * client | Semantyk
 *
 * This file contains the layout for the Page component.
 *
 * Created: Nov 30, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import "@semantyk/app/layout.css";
import { getMetadata } from "@semantyk/backend/logic/seo";
import HeadComponent
    from "@semantyk/frontend/ui/components/atoms/HeadComponent";
import Body from "@semantyk/frontend/ui/components/molecules/Body";
import Header from "@semantyk/frontend/ui/components/molecules/Header";
import Footer from "@semantyk/frontend/ui/components/molecules/Footer";
import { getLang } from "@semantyk/frontend/logic/services/getLang";

//* Main
export async function generateMetadata() {return await getMetadata();}

export default function RootLayout({ children }) {
    // Logic
    const lang = getLang();
    // Return
    return (
        // TODO: Add logic for dynamic language
        <html lang={lang}>
        <HeadComponent/>
        <Body>
            <Header/>
            {children}
            <Footer/>
        </Body>
        </html>
    );
}