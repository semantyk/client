/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.test.jsx` | `app`
 * client | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Nov 5, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */


// layout.test.jsx
import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "./layout";

describe("Root Layout", () => {
    it("should render", () => {
        render(<RootLayout/>);
    });
});