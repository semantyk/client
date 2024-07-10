/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `HeadComponent.jsx`
 * client | Semantyk
 *
 * Created: Jul 9, 2024
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
import Head from "next/head";
import Analytics from "@semantyk/frontend/logic/analytics/Analytics";
//* Local Imports

export default function HeadComponent() {
    // Return
    return (
        <Head>
            <Analytics/>
        </Head>
    );
}