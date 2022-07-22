/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Helmet | `PageHelmet`
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
import seo from "../../../../util/seo";

//* Main
class PageHelmet extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            description: this.props.description || seo.description,
            domain: seo.domain,
            keywords: seo.keywords.join(),
            title: this.props.title || seo.title,
            url: window.location.href
        };
    }

    render() {
        // Title
        const {title} = this.state;
        // Description
        const {description} = this.state;
        // Domain
        const {domain} = this.state;
        // Keywords
        const {keywords} = this.state;
        // URL
        const {url} = this.state;
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

//* Exports
export default PageHelmet;
