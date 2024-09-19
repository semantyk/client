/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file is a template for dynamic pages in the Semantyk application.
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