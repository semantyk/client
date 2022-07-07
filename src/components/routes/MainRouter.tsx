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
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//* Internal Imports
import HomePage from '../pages/HomePage';
import NotFoundPage from "../pages/NotFoundPage";

//* Main
export default function MainRouter() {
    return (<div className="MainRouter">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                {/*<Route path="/archive/" element={<ArchivePage/>}/>*/}
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>);
}