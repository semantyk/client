/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `GoogleAnalytics.jsx`
 * client | Semantyk
 *
 * Created: Jun 28, 2024
 * Modified: Jun 28, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import Script from "next/script";

//* Main
export default function Analytics() {
    const gtag = "G-15WBDLX8S4";
    return (<>
        <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
        />
        <Script id="" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag}', {
              page_path: window.location.pathname,
              });
          `}
        </Script>
    </>);
};