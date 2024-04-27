/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.test.jsx`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Apr 27, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */


//* Imports
import React from "react";
import { render } from "@testing-library/react";
//* Local Imports
import Footer from "@semantyk/frontend/ui/components/molecules/Footer/index";

//* Main
describe("Footer", () => {
    it("should render", () => {
        render(<Footer/>);
    });
});