/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `project.ts`
 *
 * July 7, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Internal Imports

//* Main
const project: any = {
    name: "Semantyk",
    description: "Knowledge Graphs Interactive Experience Ecosystem",
    domain: "semantyk.com",
    images: {
        apple_touch_icon: process.env.PUBLIC_URL + '/apple-touch-icon.png',
        connected: process.env.PUBLIC_URL + '/Connected.png',
        favicon: process.env.PUBLIC_URL + '/favicon.ico',
        logo: process.env.PUBLIC_URL + '/logo.png',
        preview: process.env.PUBLIC_URL + '/preview.png'
    },
    keywords: [
        "util viz",
        "linked util",
        "rdf",
        "rdfs",
        "semantyk",
        "semantic web",
    ],
    slogan: "Ideas Wonder",
};

//* Exports
export default project;
