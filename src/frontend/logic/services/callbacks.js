/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `callbacks.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Mouse and pointer event callbacks for interactive UI behavior.
 *
 * @created: Sep 16, 2024
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
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