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
import {Component} from 'react';

//* Internal Imports
import MainHead from './MainHead';

//* Main
export default class Head extends Component<{ description: string, title: string }, {}> {
    render() {
        const description = `Ideas Wonder | ${this.props.description}.`;
        const title = this.props.title + ' | Semantyk';
        return (
            <MainHead description={description} title={title}/>
        );
    }
}