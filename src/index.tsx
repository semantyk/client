/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `index.jsx`
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
import App from "./App";

//* Main
const element = document.getElementById('root');
const root = createRoot(element!);
root.render(<App/>);
