/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `callbacks.js`
 * client | Semantyk
 *
 * Created: Sep 16, 2024
 * Modified: Sep 16, 2024
 *
 * Author: Semantyk Team
 * Maintainer:
 *
 * Copyright © Semantyk 2024. All rights reserved.
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