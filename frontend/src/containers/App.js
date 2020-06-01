import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "../contexts/AuthContext";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Header from "../components/Header";
import Explore from "../components/Explore";
import Campaign from "../components/Campaign";
import colorVariables from "../utils/ColorVariables";

const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      backgroundColor: colorVariables.backgroundColor1,
    },
  },
}));

export default function App() {
  //eslint-disable-next-line
  const classes = useStyles();

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

function Home() {
  return <h2>Home</h2>;
}
