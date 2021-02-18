import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./components/routing/Routes";
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
//redux
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <NavBar />
          <Switch>
            <Route path='/' component={Landing} exact />
            <Route component={Routes} />
          </Switch>
        </>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
