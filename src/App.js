import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import Knowledge from "./components/pages/faq";
import Hottopics from "./components/pages/hottopics";
import Profile from "./components/pages/profile";
import Test from "./components/pages/mirrortest";
import Influencers from "./components/pages/influencers";
import SocialMedia from "./components/pages/socialmedia";
import Gefahren from "./components/pages/dangers";
import Analyse from "./components/pages/analyse"

import"./assets/css/media-queries.css";
import "./assets/css/App.css";
import Footer from "./components/footer";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Navigation />
                <Switch>
                    <Route path="/wissen/influencer/analyse" component={Analyse} />
                    <Route path="/wissen/influencer" component={Influencers} />
                    <Route path="/wissen/social-media" component={SocialMedia} />
                    <Route path="/wissen/gefahren" component={Gefahren} />
                    <Route path="/wissen" component={Knowledge} />
                    <Route path="/topics" component={Hottopics} />
                    <Route path="/profil" component={Profile} />
                    <Route path="/test" component={Test} />
                    <Route path="/" component={Home}/>
                </Switch>
            <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
