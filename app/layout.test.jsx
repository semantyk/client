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
import { vi } from "vitest";
import { render } from "@testing-library/react";
import RootLayout from "./layout";


// Mocking Solid UI React's SessionProvider
vi.mock("@inrupt/solid-ui-react", () => ({
    ...vi.importActual("@inrupt/solid-ui-react"),
    SessionProvider: ({ children }) => <>{children}</>,
    useSession: () => ({ session: { info: { webId: "https://id.example.com" } } })
}));

// Mocking the getMetadata function
vi.mock("./_logic/metadata/service", () => ({
    getMetadata: vi.fn().mockResolvedValue({ /* mock metadata object */ })
}));

describe("Root Layout", () => {
    it("should render", () => {
        render(<RootLayout/>);
    });
});