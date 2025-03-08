/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `vitest.config.js`
 * @organization: Semantyk
 *
 * @file: This file contains global configurations for Vitest, setting up how tests
 * are run across the entire project.
 *
 * @created: Dec 5, 2023
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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