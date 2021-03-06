import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import ParentLogin from "./pages/ParentLogin";
import CoachLogin from "./pages/CoachLogin";
import ParentSignup from "./pages/ParentSignup"
import CoachSignup from "./pages/CoachSignup";
import Roster from "./pages/Roster";
import Schedule from "./pages/Schedule";
import CreateSchedule from "./pages/CreateSchedule";
import CreateRoster from "./pages/CreateRoster";
import CoachView from "./pages/CoachView";
import ParentsView from "./pages/parentsView";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import store from "./store";
import "./index.css";

const App = () =>
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/chat/:id" component={Chat} />
          <Route exact path="/roster" component={Roster} />
          <Route exact path="/parent/login" component={ParentLogin} />
          <Route exact path="/coach/login" component={CoachLogin} />
          <Route exact path="/parent/signup" component={ParentSignup} />
          <Route exact path="/coach/signup" component={CoachSignup} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/createschedule" component={CreateSchedule} />
          <Route exact path="/createroster" component={CreateRoster} />
          <Route exact path="/coach" component={CoachView} />
          <Route exact path="/parent" component={ParentsView} />
          <Route component={Home} />

          
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>;


export default App;
