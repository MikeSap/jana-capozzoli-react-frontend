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
          path="/what_i_do"
          render={() => {
            return <div>What I Do</div>;
          }}
        />
        <Route
          exact
          path="/how_it_works"
          render={() => {
            return <div>How it Works</div>;
          }}
        />
        <Route
          exact
          path="/pricing"
          render={() => {
            return <div>Pricing</div>;
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
