/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx`
 * client | Semantyk
 *
 * This file contains the layout for the Page component.
 *
 * Created: Nov 30, 2023
 * Modified: Jul 5, 2024
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
import SessionProvider from "@semantyk/frontend/logic/SessionProvider";
import Analytics from "@semantyk/frontend/logic/analytics/Analytics";
import Footer from "@semantyk/frontend/ui/components/molecules/Footer";
import ColorSchemeProvider from "@semantyk/frontend/logic/ColorSchemeProvider";


//* Main
export async function generateMetadata() {return await getMetadata();}

export default function RootLayout({ children }) {
    // Return
    return (
        <html lang="en">
        <Analytics/>
        <ColorSchemeProvider>
            <SessionProvider>
                {children}
                <Footer/>
            </SessionProvider>
        </ColorSchemeProvider>
        </html>
    );
}