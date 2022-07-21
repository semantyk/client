/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `Collection.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Component} from "react";

//* Main
class Collection extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: this.props.data,
            type: this.props.type,
        };
    }

    render() {
        const {data, type} = this.state;
        const Component = type;
        return data.map((data: any) => <Component data={data}/>);
    }
}

//* Exports
export default Collection;
