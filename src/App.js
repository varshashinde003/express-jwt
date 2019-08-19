import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Footer from "./components/Footer";

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
          <div className="page-wraper">
          <Router history={history}>
            <React.Fragment>
              <Header />
              <Switch>
                {routes.map((route, index) => <Route exact path={route.path} key={index} component={route.component} />)}
                {/* <Route component={PageNotFound} /> */}
              </Switch>
              <Footer />
            </React.Fragment>
          </Router>
          </div>
        );
      }
}

export default App;