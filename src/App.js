import React, { Component } from "react";
import Body from './components/Body';
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Body} />
            <Route path="/ru" component={Body} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
