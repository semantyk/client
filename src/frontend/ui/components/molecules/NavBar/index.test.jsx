/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.test.jsx` | `Header`
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
import NavBar from "@semantyk/frontend/ui/components/molecules/NavBar/index";

//* Main
describe("NavBar", () => {
    it("should render", () => {
        render(<NavBar/>);
    });
});