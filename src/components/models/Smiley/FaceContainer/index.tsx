/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `FaceContainer.tsx`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
const FaceContainer = (props: any) => {
    const {children, data} = props;
    return (
        <svg height={data.radius} width={data.radius}>
            <g transform={`translate(${data.radius / 2},${data.radius / 2})`}>
                {children}
            </g>
        </svg>
    );
};

//* Exports
export default FaceContainer;
