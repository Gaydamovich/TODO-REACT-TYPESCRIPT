import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Menu } from "./components/Navbar";
import { Contacts } from "./components/pages/Contacts";
import { PageList } from "./components/pages/PageList";


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className="container">
          <Switch>
            <Route path="/" exact component={PageList}/>
            <Route path="/contacts" exact component={Contacts} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};