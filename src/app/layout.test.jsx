/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.test.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the test suite for the `RootLayout` component.
 *
 * @created: Nov 30, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import { render } from "@testing-library/react";
//* Local Imports
import RootLayout from "@semantyk/app/layout";

describe("Root Layout", () => {
    it("should render", () => {
        render(<RootLayout/>);
    });
});

//* Main
describe("Root Layout", () => {
    it("should render", () => {
        render(<RootLayout/>);
    });
});