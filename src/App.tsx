/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `App.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {HelmetProvider} from "react-helmet-async";
import React from 'react';

//* Internal Imports
import MainRouter from "./components/routes/MainRouter";

//* Main
export default function App() {
    return (<div className="App">
        <HelmetProvider>
            <MainRouter/>
        </HelmetProvider>
    </div>);
}