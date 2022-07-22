/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Component | `Smiley`
 *
 * July 20, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Component} from "react";

//* Internal Imports
import BackgroundCircle from './BackgroundCircle';
import Eyes from './Eyes';
import FaceContainer from './FaceContainer';
import Mouth from './Mouth';

//* Main
const data = {
    cx: 20 + Math.random() * 9,
    cy: 20 + Math.random() * 15,
    er: 5 + Math.random() * 10,
    mr: 30 + Math.random() * 10,
    mWidth: 7 + Math.random() * 9,
    radius: 160,
    strokeWidth: 6 + Math.random() * 3
};

class Smiley extends Component<any> {
    render() {
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

//* Exports
export default Smiley;
