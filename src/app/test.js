/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `test.js` | `app`
 * README.md | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Nov 30, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { render } from "@testing-library/react";
//* Local Imports
import RootLayout from "./layout";

//* Main
test("Render Application", () => {
    render(<RootLayout/>);
});