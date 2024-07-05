/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `vitest.config.js`
 * client | Semantyk
 *
 * This file contains global configurations for Vitest, setting up how tests
 * are run across the entire project.
 *
 * Created: Dec 5, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { defineConfig } from "vitest/config";

//* Main
export default defineConfig({
    resolve: {
        alias: {
            "@semantyk": "/src",
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.js",
    },
});