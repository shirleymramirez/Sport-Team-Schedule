import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signin from "./pages/Signin"
import CoachView from "./pages/CoachView";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/signin" component={Signin} />
        <Route exact path="/coach" component={CoachView} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
