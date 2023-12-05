/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.js`
 * client | Semantyk
 *
 * Created: Dec 04, 2023
 * Modified: Dec 04, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
export default function FooterLayout({ children }) {
    const position = "sticky-bottom";
    // Return
    return (
        <footer id="Footer" className={`${position} text-center`}>
            {children}
        </footer>
    );
}