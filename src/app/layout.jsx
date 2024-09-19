/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the layout for the Page component.
 *
 * @created: Nov 30, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import "@semantyk/app/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMetadata } from "@semantyk/backend/logic/seo";
import Head from "@semantyk/frontend/ui/components/atoms/Head";
import Body from "@semantyk/frontend/ui/components/molecules/Body";
import { getLang } from "@semantyk/frontend/logic/services/getLang";
import Content from "@semantyk/frontend/ui/components/molecules/Content";
import Model from "@semantyk/frontend/ui/models/atoms/Model";


//* Main
export async function generateMetadata() {return await getMetadata();}

export default function RootLayout({ children }) {
    // Logic
    const lang = getLang();
    // Return
    return (
        // TODO: Add logic for dynamic language
        <html lang={lang}>
        <Head/>
        <Body>
            <Content>
                <Model/>
                {children}
            </Content>
        </Body>
        </html>
    );
}