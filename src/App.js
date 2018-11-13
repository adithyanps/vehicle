import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import SavedData from './containers/Saved/Saved';
// import PageBuilder from './containers/Builder/PageBuilder';
import Builder from './containers/Builder/Builder';
// import Builder from './containers/Builder/Test';


import Layout from './hoc/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout >
          <Switch>
            <Route path="/saved-items" component={SavedData} />

            <Route path="/" exact component={Builder} />
          </Switch>
        </Layout>




      </div>
    );
  }
}


export default App;
