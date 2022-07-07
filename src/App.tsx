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

import {HelmetProvider} from 'react-helmet-async';
import React from 'react';
import MainRouter from "./components/routes/MainRouter";

export default function App() {
    return (
        <HelmetProvider>
            <MainRouter/>
        </HelmetProvider>
    );
}