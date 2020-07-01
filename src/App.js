import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import Mirror from "./components/pages/mirror";
import Faq from "./components/pages/faq";

import"./assets/css/media-queries.css";
import "./assets/css/App.css";
import Footer from "./components/footer";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Navigation />
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/mirror" component={Mirror} />
                    <Route path="/faq" component={Faq} />
                </Switch>
            <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;