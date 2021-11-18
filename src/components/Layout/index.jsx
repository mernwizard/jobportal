import React from "react";
import Nav from "../Nav";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Rejected from "../../pages/Rejected";
import ShortListed from "../../pages/Shortlisted";
import SingleUser from "../../pages/Singleuser";

const Layout = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shortlisted" component={ShortListed} />
        <Route path="/rejected" component={Rejected} />
        <Route path="/:id" component={SingleUser} />
      </Switch>
    </>
  );
};

export default Layout;
