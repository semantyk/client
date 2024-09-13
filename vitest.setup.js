/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `vitest.setup.js`
 * client | Semantyk
 *
 * This file is used to specify setup code that runs before each test file
 * is executed, often used for test initialization.
 *
 * Created: Dec 5, 2023
 * Modified: Sep 12, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
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