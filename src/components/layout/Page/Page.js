import React, {Component} from 'react';
import '../../../scss/layout/page.scss'
import PageView from "./PageView";


class Page extends Component {

    render() {
        return (
            <PageView page={this.props.children}/>
        )
    }
}

export default Page;


