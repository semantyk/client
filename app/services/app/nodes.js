/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `nodes.js`
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
import { NamedNode } from "rdflib";

//* Main
export const APP_WEBID = NamedNode.fromValue("https://id.inrupt.com/semantyk");
export const APP_WEBID_DOC = NamedNode.fromValue("https://storage.inrupt.com/93eee8ab-4002-4bbf-a457-38eab9979cc8/public/profile/card");
export const CLIENT_ID = NamedNode.fromValue("https://id.www.semantyk.com");
export const POD_URI = NamedNode.fromValue("https://login.inrupt.com/");