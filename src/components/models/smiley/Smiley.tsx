/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `Smiley.tsx`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Internal Imports
import {BackgroundCircle} from './BackgroundCircle';
import {Eyes} from './Eyes';
import {FaceContainer} from './FaceContainer';
import {Mouth} from './Mouth';
import {Component} from "react";

export class Smiley extends Component<any> {
    render() {
        const {data} = this.props;
        return (
            <FaceContainer data={data}>
                <BackgroundCircle radius={data.radius}
                                  strokeWidth={data.strokeWidth}/>
                <Eyes cx={data.cx} cy={data.cy} r={data.er}/>
                <Mouth r={data.mr} width={data.mWidth}/>
            </FaceContainer>
        );
    }
}
