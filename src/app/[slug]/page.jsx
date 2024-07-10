/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.jsx`
 * client | Semantyk
 *
 * This file is a template for dynamic pages in the Semantyk application.
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
import "@semantyk/app/page.css";
import Page from "@semantyk/app/page";
import { getMetadata } from "@semantyk/backend/logic/seo";

//* Metadata
export async function generateMetadata({ params }) {
    // Props
    const { slug } = params;
    // Return
    return await getMetadata(slug);
}

//* Main
export default async function DynamicPage(props) {
    // Props
    const { children } = props;
    // Return
    return (
        <Page>
            {children}
        </Page>
    );
}