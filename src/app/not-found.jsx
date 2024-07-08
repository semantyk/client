/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `not-found.jsx`
 * client | Semantyk
 *
 * This file contains the `NotFound` component.
 *
 * Created: Dec 6, 2023
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
import Page from "@semantyk/app/page";

//* Main
export default function NotFound() {
    return (
        <Page>
            <h1>404 - Not Found</h1>
            <p className="text-secondary">Could not find requested resource</p>
        </Page>
    );
}