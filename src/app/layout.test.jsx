/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.test.jsx`
 * client | Semantyk
 *
 * This file contains the test suite for the `RootLayout` component.
 *
 * Created: Nov 30, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import { render } from "@testing-library/react";
//* Local Imports
import RootLayout from "@semantyk/app/layout";

//* Main
describe("Root Layout", () => {
    it("should render", () => {
        render(<RootLayout/>);
    });
});