/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `Content`
 * client | Semantyk
 *
 * Created: Jul 17, 2024
 * Modified: Jul 17, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import Header from "@semantyk/frontend/ui/components/molecules/Header";
import Footer from "@semantyk/frontend/ui/components/molecules/Footer";
import "@semantyk/frontend/ui/components/molecules/Content/index.css";
import ContentLayout
    from "@semantyk/frontend/ui/components/molecules/Content/layout";


//* Main
export default function Content({ children }) {
    // Return
    return (
        <ContentLayout>
            <Header/>
            {children}
            <Footer/>
        </ContentLayout>
    );
};