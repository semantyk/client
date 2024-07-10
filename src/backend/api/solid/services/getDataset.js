/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getDataset.js`
 * client | Semantyk
 *
 * This file contains a function that retrieves a dataset from a Solid document.
 *
 * Created: Dec 23, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { getSolidDataset } from "@inrupt/solid-client";

//* Main
export const getDataset = async (fetch, uri, type = "solid") => {
    switch (type) {
        case "solid":
            return await getSolidDataset(uri, { fetch });
        default:
            const document = await fetch(uri, { headers: { Accept: type } });
            return await document.text();
    }
};