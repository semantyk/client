/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `callbacks.js`
 * @organization: Semantyk
 * @client: client
 *
 * @created: Sep 16, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

// onMouseMove
export const onMouseMove = (event) => {
    // Props
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    // Logic
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    // Return
    return { clientX, clientY, x, y };
};