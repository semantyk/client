/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Router | `Router`
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
import ArchivePage from "../pages/ArchivePage";
import HomePage from '../pages/HomePage';
import NotFoundPage from "../pages/NotFoundPage";

//* Main
const Router = () => (
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

//* Exports
export default Router;
