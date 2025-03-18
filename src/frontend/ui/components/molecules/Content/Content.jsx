/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `Content`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Jul 17, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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