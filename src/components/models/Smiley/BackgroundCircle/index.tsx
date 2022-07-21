/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Component | `BackgroundCircle`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
const BackgroundCircle = (props: any) => {
    const {radius, strokeWidth} = props;
    return (
        <circle
            r={radius / 2 - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            strokeWidth={strokeWidth}
        />
    );
};

//* Exports
export default BackgroundCircle;
