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

//* Main
export default class MainHead extends Component<{ description?: string, preview?: string, title?: string, url?: string }, {}> {
    render() {
        const title = this.props.title === undefined ? 'Semantyk' : this.props.title;
        const description = this.props.description === undefined ? 'Ideas Wonder. | Visual Interactive Semantic Intelligent Online Network.' : this.props.description;
        const preview = this.props.preview === undefined ? process.env.PUBLIC_URL + '/preview.png' : this.props.preview;
        const apple_touch_icon = this.props.preview === undefined ? process.env.PUBLIC_URL + '/apple-touch-icon.png' : this.props.preview;
        const domain = 'semantyk.com';
        const favicon = this.props.preview === undefined ? process.env.PUBLIC_URL + '/favicon.ico' : this.props.preview;
        const keywords = "Semantyk, Linked Data, Solid, CSS, JavaScript";
        const url = this.props.url === undefined ? window.location.href : this.props.url;
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
                {/* Keywords*/}
                <meta content={keywords} name="keywords"/>
                {/* Apple Touch Icon */}
                <link href={apple_touch_icon} rel="apple-touch-icon"/>
                {/* Favicon */}
                <link href={favicon} rel="icon"/>
                {/* Preview Image */}
                <meta content={preview} property="og:image"/>
                <meta content={preview} property="twitter:image"/>
                {/* URL */}
                <meta content={url} property="og:url"/>
                <meta content={domain} property="twitter:domain"/>
                <meta content={url} property="twitter:url"/>
                {/* HTML/CSS */}
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1"
                      name="viewport"/>
                {/* Facebook Domain Verification */}
                <meta content="787eo0v092pbygw2kjh68w1gfqu28p"
                      name="facebook-domain-verification"/>
                <meta content="website" property="og:type"/>
                {/* Twitter Meta Tags */}
                <meta content="summary_large_image" property="twitter:card"/>
            </Helmet>
        );
    }
}