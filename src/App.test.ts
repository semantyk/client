/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `App.test.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Exports
import {render} from '@testing-library/react';

//* Internal Exports
import App from "./App";

//* Main
describe("Render", () => {
    it("<App />", () => {
        render(App());
    });
});
