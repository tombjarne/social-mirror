import React from "react";
import ReactPlayer from "react-player";

class Home extends React.Component {

    render() {
        return (
            <div className="claim-actions double-feature">
                <div>
                    <h3>Influencers</h3>
                    <p>See information about your favourite influencers.</p>
                    <ul className="list">
                        <li>followers and likes</li>
                        <li>advertisements</li>
                        <li>brand-deals</li>
                    </ul>
                </div>
                <div>
                    <h3>Yourself</h3>
                    <p>See your own stats and statistics.</p>
                    <ul className="list">
                        <li>followers and likes</li>
                        <li>time spent on social media</li>
                        <li>most influential people</li>
                    </ul>
                </div>
                <div id="claim">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>How does social media influence our lives?</h2>
                        <p>
                            Volunteer is a tool that connects volunteers with people who need
                            help with getting food, medication and similar tasks. Click on
                            whether you want to help or be helped
                        </p>
                        <div className="claim-actions">
                            <div className="play">
                                <ReactPlayer id="video-player" url="https://www.youtube-nocookie.com/embed/x2y6PHHsJio" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;