import { BrowserRouter as Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <Home />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/work_with_me"
          render={() => {
            return <div>Work With Me</div>;
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return <div>About </div>;
          }}
        />

        <Route
          exact
          path="/contact"
          render={() => {
            return <div>Contact</div>;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
