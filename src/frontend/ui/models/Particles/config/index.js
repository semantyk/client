/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `config.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the configuration for the Particles model.
 *
 * @created: Mar 7, 2025
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
export const config = {
    // General
    general: {
        showHelpers: true,
        scale: 1,
        size: 150,
    },
    // Camera
    camera: {
        margin: 1 / 3,
        makeDefault: true
    },
    // Animations
    animations: {
        chaos: {
            magnitude: 0.25,
            radius: 0.10
        },
        order: {
            magnitude: 0.25
        },
        expansion: {
            magnitude: 1,
        },
        flotation: {
            magnitude: 1,
            speed: 1
        },
        interpolation: {
            duration: 5
        }
    },
    // Image
    image: {
        path: "/favicon.png"
    },
    // Particles
    particle: {
        density: 1,
        size: 0.75
    }
};