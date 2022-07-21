/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * View | `NotFoundPage`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import React, {Component} from 'react';

//* Internal Imports
import Footer from '../../components/structure/Footer';
import Header from '../../components/structure/Header';
import SubPageHelmet from '../../components/structure/Helmet/SubPageHelmet';

//* Main
class NotFoundPage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '404 Not Found',
            description: 'Not Found'
        };
    }

    render() {
        const {description, title} = this.state;
        return (<>
            <SubPageHelmet description={description} title={title}/>
            <Header/>
            <h1 className="my-3 text-center">{title}</h1>
            <Footer/>
        </>);
    }
}

//* Exports
export default NotFoundPage;
