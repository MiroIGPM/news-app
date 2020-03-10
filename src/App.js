import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Article from './components/news/Article';

import { Provider } from './context'

import './App.css';



 class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/news/article/:id" component={Article} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>  
    )
  }
}


export default App