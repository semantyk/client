/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `MainHead.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Component} from 'react';
import {Helmet} from 'react-helmet-async';

//* Internal Imports
import {seo} from "../../seo";

//* Main
export default class MainHead extends Component<{ description?: string, title?: string }, {}> {
    render() {
        // Title
        const title = this.props.title || seo.title;
        // Description
        const description = this.props.description || seo.description;
        // Domain
        const domain = seo.domain;
        // Keywords
        const keywords = seo.keywords.join();
        // URL
        const url = window.location.href;
        // return
        return (
            <Helmet>
                {/* Title */}
                <title>{title}</title>
                <meta content={title} name="title"/>
                <meta content={title} property="og:title"/>
                <meta content={title} property="twitter:title"/>
                {/* Description*/}
                <meta content={description} name="description"/>
                <meta content={description} property="og:description"/>
                <meta content={description} property="twitter:description"/>
                {/* Domain */}
                <meta content={domain} property="twitter:domain"/>
                {/* Keywords*/}
                <meta content={keywords} name="keywords"/>
                {/* URL */}
                <link href={url} rel="canonical"/>
                <meta content={url} property="og:url"/>
                <meta content={url} property="twitter:url"/>
            </Helmet>
        );
    }
}