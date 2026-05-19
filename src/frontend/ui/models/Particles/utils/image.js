/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `image.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Image sampling utilities for the Particles model.
 *
 * @created: Mar 14, 2025
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

export function getImageData(args) {
    // Args
    const { data: { unit }, objects: { image } } = args;
    // Logic
    let { width, height } = image;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = unit;
    canvas.height = (height / width) * unit;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    // Return
    return context.getImageData(0, 0, canvas.width, canvas.height);
}