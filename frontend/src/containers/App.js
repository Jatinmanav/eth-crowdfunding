import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Header from "../components/Header";
import Home from "../components/Home";
import Explore from "../components/Explore";
import Campaign from "../components/Campaign";
import Newcampaign from "../components/Newcampaign";

export default function App() {
  const { auth } = useContext(AuthContext);
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            {auth.isAuthenticated ? <Home /> : <Signin />}
          </Route>
          <Route path="/signup">
            {auth.isAuthenticated ? <Home /> : <Signup />}
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/create-campaign">
            {auth.isAuthenticated ? <Newcampaign /> : <Signin />}
          </Route>
          <Route path="/campaigns/">
            <Campaign />
          </Route>
          <Route path="/" render={() => <h1>Error 404: Page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}
