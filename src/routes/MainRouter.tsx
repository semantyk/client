/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `MainRouter.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import React from 'react';
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//* Internal Imports
import {ArchivePage} from "../components/pages/ArchivePage";
import {HomePage} from '../components/pages/HomePage';
import {NotFoundPage} from "../components/pages/NotFoundPage";

//* Main
export const MainRouter = () => (
    <HelmetProvider>
        <BrowserRouter>
            <Routes>
                {/* TODO: Replace with Factory */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/archive" element={<ArchivePage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    </HelmetProvider>
);
