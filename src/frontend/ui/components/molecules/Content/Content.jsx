/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Content.jsx` | `Content`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Molecule component rendering main page content from knowledge.
 *
 * @created: Jul 17, 2024
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import Footer from "@semantyk/frontend/ui/components/molecules/Footer/Footer";
import "@semantyk/frontend/ui/components/molecules/Content/Content.styles.css";
import ContentLayout
    from "@semantyk/frontend/ui/components/molecules/Content/Content.layout";


//* Main
export default function Content({ children }) {
    // Return
    return (
        <ContentLayout>
            {/*<Header/>*/}
            {children}
            <Footer />
        </ContentLayout>
    );
};