import "./App.css";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import RandomList from "./components/RandomList";
import TreasureList from "./components/TreasureList";

function App() {
  return (
    <div
    // className="App"
    >
      <Navbar />
      <Switch>
        <Route exact path="/random">
          <RandomList />
        </Route>

        <Route exact path="/treasures">
          <TreasureList />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
