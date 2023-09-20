import "./App.css";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>子应用2</div>
        <Router basename={window.__POWERED_BY_QIANKUN__ ? "/child-two" : "/"}>
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Redirect from="/child-one" to="/home" exact />
            <Route key="home" path="/home" exact={true} component={Home} />
            <Route key="page1" path="/page1" exact={true} component={Page1} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
