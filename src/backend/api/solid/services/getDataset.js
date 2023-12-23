/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getDataset.js`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Dec 23, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

import { getSolidDataset } from "@inrupt/solid-client";

export const getDataset = async (fetch, uri, type = "solid") => {
    switch (type) {
        case "solid":
            return await getSolidDataset(uri, { fetch });
        default:
            const document = await fetch(uri, { headers: { Accept: type } });
            return await document.text();
    }
};