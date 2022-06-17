/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `Head.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import React from 'react';

//* Internal Imports
import MainHead from './MainHead';

//* Main
export default class Head extends React.Component<{ description?: string, preview?: string, title?: string, url?: string }, {}> {
    render() {
        const description = 'Ideas Wonder.' + (this.props.description === undefined ? '' : ' | ' + this.props.description + '.');
        const {preview} = this.props;
        const title = this.props.title + ' | Semantyk';
        const {url} = this.props;
        return (
            <MainHead description={description} preview={preview} title={title}
                      url={url}/>
        );
    }
}