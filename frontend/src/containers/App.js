import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "../contexts/AuthContext";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Header from "../components/Header";
import Home from "../components/Home";
import Explore from "../components/Explore";
import Campaign from "../components/Campaign";
import Newcampaign from "../components/Newcampaign";

export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/create-campaign">
              <Newcampaign />
            </Route>
            <Route path="/campaigns/">
              <Campaign />
            </Route>
            <Route path="/" render={() => <h1>Error 404: Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}
