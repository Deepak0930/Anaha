import './index.css';
import React, { Suspense } from "react";
import Header from "./Components/Header"
import PatientDetails from "./Components/PatientDetails"
import TabsComponent from "./Components/TabsComponent"
import APIForm from "./Components/Objective2/APIForm"
import Restaurents from "./Components/Objective2/Restaurents"
import Error from "./Components/Error"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Suspense fallback="Loading">
          <Router>
          <Switch>
            <Redirect exact from="/" to="/ui" />
            <Route exact path="/ui">
              <Header />
              <PatientDetails />
              <TabsComponent/>
            </Route>
            <Route exact path="/api1" component={APIForm} />
            <Route exact path="/api2" component={Restaurents} />
            <Route component={Error} />
          </Switch>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
