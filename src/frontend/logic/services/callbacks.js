/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `callbacks.js`
 * @organization: Semantyk
 * @client: client
 *
 * @created: Sep 16, 2024
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
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