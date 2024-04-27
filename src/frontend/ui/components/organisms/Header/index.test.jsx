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
import Header from "@semantyk/frontend/ui/components/organisms/Header";
import { render } from "@testing-library/react";
//* Main

describe("Header", () => {
    it("should render", () => {
        render(<Header/>);
    });
});