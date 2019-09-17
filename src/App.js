import React,{Component} from "react";
import {Switch, Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layout/Page/Page.js';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';




class App extends Component{
    constructor(props){
        super(props);
        this.history = createBrowserHistory();
    }

    render(){
        return(
            <Router history={this.history}>
                <Page>
                    <Switch>
                        <Route exact strict path="/" component={Home} />
                        <Route exact strict path="/about" component={About} />
                    </Switch>
                </Page>
            </Router>
        )
    }
}

export default App;