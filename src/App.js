import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layout/Page/Page';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Film from './components/Pages/Film/Film';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <Router history={this.history}>
        <Page>
          <Switch>
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/about" component={About} />
            <Route exact strict path="/film/:filmId?" component={Film} />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
