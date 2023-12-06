/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `vitest.config.js`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { defineConfig } from "vitest/config";

//* Main
export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.js",
    },
});