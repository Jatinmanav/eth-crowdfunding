import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "../contexts/AuthContext";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}
