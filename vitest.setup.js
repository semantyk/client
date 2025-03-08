/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `vitest.setup.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file is used to specify setup code that runs before each test file
 * is executed, often used for test initialization.
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
import "@testing-library/jest-dom";

//* Main
// canvas.getContext
window.HTMLCanvasElement.prototype.getContext = () => {
    return { fillRect: () => {} };
};
// global.ResizeObserver
global.ResizeObserver = class {
    observe() {}

    unobserve() {}

    disconnect() {}
};
// window.matchMedia
window.matchMedia = function (query) {
    return {
        media: query,
        addEventListener: function () {},
        removeEventListener: function () {}
    };
};