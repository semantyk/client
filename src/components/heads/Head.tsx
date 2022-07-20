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

//* Internal Imports
import MainHead from './MainHead';

//* Main
export const Head = (props: any) => {
    const description = `Ideas Wonder | ${props.description}.`;
    const title = props.title + ' | Semantyk';
    return <MainHead description={description} title={title}/>;
};
