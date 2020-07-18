import React from "react";

import Button from "react-bootstrap/Button";
import happy from "../../assets/img/happy-symbol.png";
import ad from "../../assets/img/werbung-symbol.png";
import money from "../../assets/img/euro-symbol.png";
import ex1 from "../../assets/img/instagram-example-1.jpg";
import ex2 from "../../assets/img/instagram-example-2.jpg";
import FormControl from "react-bootstrap/FormControl";
import ReactPlayer from "react-player";

class Influencers extends React.Component {

    render() {
        return (
            <section id="home">
                <div className="info">
                    <div className="wrapper">
                        <h2>Influencer und ihre Gefahren</h2>
                        <div className="icon-container-alternativ">
                            <div className="claim-actions">
                                <div className="play">
                                    <h2 id="if-marketing">Influencer Marketing</h2>
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=hiZTLIKG3Hs" />
                                    <h2 id="if-traumjob">Traumjob Influencer?</h2>
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=QnRQYQ_q9xU" />
                                    <h2 id="instagram">Instagram</h2>
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=f0TCqNPkyiU" />
                                    <h2 id="if-beruf">Beruf Influencer</h2>
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=tVQOHTXJkFk" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Influencers;
