/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `service.js` | `appData`
 * client | Semantyk
 *
 * Created: Dec 03, 2023
 * Modified: Dec 03, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */


//* Main
export default function getAppData() {
    // Props
    const author = "Semantyk Team";
    const description = "Ideas Wonder | Knowledge Graphs Interactive Experience Ecosystem.";
    const creator = "Semantyk Team";
    const keywords = [
        "semantyk",
        "ideas wonder",
        "knowledge graphs",
        "interactive"
    ];
    const lang = "en";
    const title = "Semantyk";
    const twitter = "@semantyk";
    const url = "https://www.semantyk.com";
    const webId = "https://id.semantyk.com";
    // Return
    return {
        author,
        creator,
        description,
        keywords,
        lang,
        title,
        twitter,
        url,
        webId
    };
}