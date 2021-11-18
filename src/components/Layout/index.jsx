import React from "react";
import Nav from "../Nav";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Rejected from "../../pages/Rejected";
import ShortListed from "../../pages/Shortlisted";

const Layout = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shortlisted" component={ShortListed} />
        <Route path="/rejected" component={Rejected} />
      </Switch>
    </>
  );
};

export default Layout;
