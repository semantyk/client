/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Test | `ArchivePage`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Exports
import React from 'react';
import {render} from "@testing-library/react";

//* Internal Exports
import App from "./index";

//* Main
describe('App', () => {
    test('render', () => {
        render(<App/>);
    });
});
