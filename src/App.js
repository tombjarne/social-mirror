import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import Knowledge from "./components/pages/faq";
import Profile from "./components/pages/profile";
import Test from "./components/pages/mirrortest";
import Influencers from "./components/pages/influencers";
import SocialMedia from "./components/pages/socialmedia";
import Gefahren from "./components/pages/dangers";
import AnalyseA from "./components/pages/analysea"
import Analyse from "./components/pages/analyse"
import Rewards from "./components/pages/rewards"
import Coupons from "./components/pages/coupons"
import Videos from "./components/pages/videos"
import RewardA from "./components/pages/rewardsa"
import RewardsPage from "./components/pages/rewardspage"

import"./assets/css/media-queries.css";
import "./assets/css/App.css";
import Footer from "./components/footer";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Navigation />
                <Switch>
                    <Route path="/wissen/influencer/analyse/1001" component={AnalyseA} />
                    <Route path="/wissen/influencer/analyse/1000" component={Analyse} />
                    <Route path="/wissen/influencer/videos" component={Videos} />
                    <Route path="/wissen/influencer" component={Influencers} />
                    <Route path="/wissen/social-media" component={SocialMedia} />
                    <Route path="/wissen/gefahren" component={Gefahren} />
                    <Route path="/rewards/1000" component={RewardA} />
                    <Route path="/rewards/1001" component={Rewards} />
                    <Route path="/rewards" component={RewardsPage} />
                    <Route path="/coupons" component={Coupons} />
                    <Route path="/wissen" component={Knowledge} />
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
