/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `App.test.ts`
 *
 * July 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {createRoot} from "react-dom/client";

//* Internal Imports
import App from './App';

//* Main
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App/>);
