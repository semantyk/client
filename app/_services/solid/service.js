/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `service.js`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import {
    getInteger,
    getSolidDataset,
    getStringNoLocale,
    getStringNoLocaleAll,
    getStringWithLocale,
    getStringWithLocaleAll,
    getThing as getSolidThing,
    getUrl,
    getUrlAll
} from "@inrupt/solid-client";

export const getNumber = (thing, property) => {
    return getInteger(thing, property);
};

export const getProperty = (thing, type, property, locale) => {
    // Ranges
    switch (type) {
        case "number":
            return getNumber(thing, property);
        case "stringNoLocale":
            return getStringNoLocale(thing, property);
        case "string":
            return getString(thing, property, locale);
        case "stringAllNoLocale":
            return getStringNoLocaleAll(thing, property);
        case "stringAll":
            return getStringWithLocaleAll(thing, property, locale);
        case "url":
            return getURL(thing, property);
        case "urlAll":
            return getURLAll(thing, property);
    }
};

export const getProperties = (thing, shape, locale) => {
    let properties = {};
    for (const { ns, fragment, type } of shape) {
        const property = ns(fragment).value;
        properties[fragment] = getProperty(thing, type, property, locale);
    }
    return properties;
};

export const getString = (thing, property, locale) => {
    if (locale) {
        const result = getStringWithLocale(thing, property, locale);
        if (result) return result;
    }
    return getStringNoLocale(thing, property);
};

export const getThing = async (fetch, document, uri) => {
    // Project Dataset
    const dataset = await getSolidDataset(document, { fetch });
    // Return
    return getSolidThing(dataset, uri);
};


export const getURL = (thing, property) => {
    return getUrl(thing, property);
};

export const getURLAll = (thing, property) => {
    return getUrlAll(thing, property);
};