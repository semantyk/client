/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getDataset.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains a function that retrieves a dataset from a Solid
 *  document.
 *
 * @created: Dec 23, 2023
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
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