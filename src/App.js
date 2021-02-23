import "./App.css";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import RandomList from "./components/RandomList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/random">
          <RandomList />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
