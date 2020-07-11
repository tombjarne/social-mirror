import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import Analysis from "./components/pages/mirror";
import Knowledge from "./components/pages/faq";
import Hottopics from "./components/pages/hottopics";
import Statistics from "./components/pages/statistics";
import Eprivacy from "./components/pages/eprivacy";
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
                    <Route path="/analysis" component={Analysis} />
                    <Route path="/wissen/influencer/analyse" component={Analyse} />
                    <Route path="/wissen/influencer" component={Influencers} />
                    <Route path="/wissen/social-media" component={SocialMedia} />
                    <Route path="/wissen/gefahren" component={Gefahren} />
                    <Route path="/wissen" component={Knowledge} />
                    <Route path="/topics" component={Hottopics} />
                    <Route path="/statistics" component={Statistics} />
                    <Route path="/eprivacy" component={Eprivacy} />
                    <Route path="/test" component={Test} />
                    <Route path="/" component={Home}/>
                </Switch>
            <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
