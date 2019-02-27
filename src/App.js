import React, { Component } from "react";
import Body from './components/Body';
import Policy from './pages/policy';
import Fees from './pages/fees';
import About from './pages/about';
import PrivacyPolicy from './pages/privacy_policy';
import Terms from './pages/terms_and_conditions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Offerta from "./pages/offerta";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route exact path="/" exact component={Body} />
              <Route path="/ru" exact component={Body} />
              <Route path="/ru/policy" component={Policy} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/ru/offerta" component={Offerta} />
              <Route path="/fees" component={Fees} />
              <Route path="/terms" component={Terms} />
              <Route path="/ru/about" component={About} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
