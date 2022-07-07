// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Index
// Module | `index.js`
//
// React Index Module.
//
// Daniel Bakas Amuchastegui\
// Dicember 27, 2020
//
// Copyright © Semantyk 2020. All rights reserved.\
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

import App from './App';
import React from 'react';
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);