import "./App.css";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>微前端实践-qiankun</div>
      <div>主应用main111</div>
      <nav>
        <Link to={"/"}>主应用首页</Link>
        <Link to={"/child-one"}>访问子应用1</Link>
        <Link to={"/child-two"}>访问子应用2</Link>
      </nav>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route key="home" path="/home" exact={true} component={Home} />
        </Switch>
      </Router>
      {/* 加载子应用时，将其挂载到#container元素下 */}
      <div id="container"></div>
    </div>
  );
}

export default App;
