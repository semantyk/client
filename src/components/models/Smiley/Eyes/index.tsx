/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `Eyes.tsx`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
const Eyes = (props: any) => {
    const {cx, cy, r} = props;
    return (<>
        <circle cx={-cx} cy={-cy} r={r}/>
        <circle cx={cx} cy={-cy} r={r}/>
    </>);
};

//* Exports
export default Eyes;
