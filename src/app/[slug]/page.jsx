/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.jsx`
 * client | Semantyk
 *
 * This file is a template for dynamic pages in the Semantyk application.
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
import "@semantyk/app/page.css";
import Page from "@semantyk/app/page";
import { getPage } from "@semantyk/frontend/logic/services/getPage";
import {
    getKnowledge
} from "@semantyk/backend/api/knowledge/services/getKnowledge";

//* Metadata
export async function generateMetadata({ params }) {
    const { slug } = params;
    try {
        const { title, subtitle } = await getPage(slug);
        // TODO: Remove when Template description is added to Next.js
        const { slogan } = await getKnowledge(fetch);
        const description = `${slogan} | ${subtitle}`;
        return { title, description };
    } catch (e) {
        console.log(`Error: ${slug} does not exist`);
    }
}

//* Main
export default function DynamicPage(props) {
    // Return
    return <Page {...props}/>;
}