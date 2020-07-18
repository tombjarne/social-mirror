import React from "react";

import user from "../../assets/img/user-alt-solid.svg";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import user_chart from "../../assets/img/profile-analysis.png";
import trophy from "../../assets/img/trophy.png";
import cert from "../../assets/img/certificate.png";
import user_graph from "../../assets/img/profile-graph.png";
import Button from "react-bootstrap/Button";

class Analyse extends React.Component {

    constructor(props) {
        super (props);

        this.state = {
            clicked: false,
            age: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.showVideo = this.showVideo.bind(this);
    }

    handleOpen(){
        this.setState({
            clicked: true,
        });
    }

    handleClose(){
        this.setState({
            clicked: false,
        });
    }

    showVideo(){
        this.setState({
            age: true,
        })
    }

    render() {
        return (
            <section id="home">
                <div id="hero">
                    <div id="hero-cta">
                        <div>
                            <h1>Hallo Jon!</h1>
                            <div className="legend">
                                <p id="fb" >Facebook</p>
                                <p id="in" >Instagram</p>
                                <p id="yt" >Twitter</p>
                            </div>
                            <div className="spacing"></div>
                            <h3 className="centered">Letzte Woche auf einen Blick</h3>
                            <div className="button-wrapper-vert">
                                <span className="txt-highlight">3% weniger Instagram</span>
                                <div className="spacing-slim"></div>
                                <span className="txt-highlight">12% weniger Facebook</span>
                                <div className="spacing-slim"></div>
                                <span className="txt-highlight red">4% mehr Twitter</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="wrapper">
                        <div id="hero-cta">
                            <div className="profile-wrapper">
                                <img className="profile-img" src={user}/>
                                <h2>Jon Doe</h2>
                                <span className="highlight">3:37h letzte Woche</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Deine Beschäftigungen</h2>
                        <div className="icon-container">
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={twitter} />
                                </div>
                                <h3>Twitter</h3>
                                <span className="highlight">1:59h letzte Woche</span>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={facebook} />
                                </div>
                                <h3>Facebook</h3>
                                <span className="highlight">1:39h letzte Woche</span>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={instagram} />
                                </div>
                                <h3>Instagram</h3>
                                <span className="highlight">0:29h letzte Woche</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Aktivität</h2>
                        <p className="slim-text">
                            <div className="ranking-harmless">
                                <div className="ranking-wrapper">
                                    <p>Wir haben deine Aktivität anhand deiner öffentlichen Aktionen für dich aufgezeichnet:</p>
                                    <h3 className="txt-highlight ">Videos <span className=" span good">-7%</span></h3>
                                    <h3 className="txt-highlight ">Bilder <span className=" span bad">+15%</span></h3>
                                    <h3 className="txt-highlight ">Chatting <span className=" span good">-10%</span></h3>
                                </div>
                            </div>
                        </p>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Aufteilung</p>
                        </div>
                        <div className="chart-container">
                            <img src={user_chart} className="chart" />
                            <h3>Fazit</h3>
                            <p className="centered">
                                Gut gemacht! Du hast letzte Woche deine Gesamtzeit auf den sozialen Medien verringert!
                            </p>
                        </div>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Detail</p>
                        </div>
                        <div className="chart-container">
                            <img src={user_graph} className="chart" />
                            <div className="legend">
                                <p id="fb" >Facebook</p>
                                <p id="in" >Instagram</p>
                                <p id="yt" >Twitter</p>
                            </div>
                        </div>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Leaderboard</p>
                        </div>
                        <div className="chart-container">
                            <div className="wrapper">
                                <p className="slim-text highlight good" >1. Du</p>
                                <p className="slim-text highlight bad" >2. Aleksander</p>
                                <p className="slim-text highlight bad" >3. Marius</p>
                            </div>
                            <p className="centered">
                                Glückwunsch! Du bist auf dem ersten Platz! Bleib weiterhin am Ball, um eine weitere Belohnung freizuschalten.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="info-bright">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Deine Belohnungen</h2>
                        <div className="icon-container">
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={trophy} />
                                </div>
                                <h3>Rewards</h3>
                                <p className="slim-text centered">Sieh dir all hier deine gewonnenen und verdienten Belohnungen an!</p>
                                <Button className="helper-btn agree-btn" onClick={() => window.location.href="/rewards"}>Jetzt ansehen</Button>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={cert} />
                                </div>
                                <h3>Gutscheine</h3>
                                <p className="slim-text centered">Hol dir hier deine hart verdienten Gutscheine ab!</p>
                                <Button className="helper-btn agree-btn" onClick={() => window.location.href="/coupons"}>Jetzt ansehen</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Einstellungen</h2>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Erinnerungen</p>
                            </div>
                            <div className="spacing"></div>
                            <span className="txt-highlight good">ab 30 Minuten am Stück</span>
                            <div className="spacing"></div>
                        </div>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Ruhezeit</p>
                            </div>
                            <div className="spacing"></div>
                            <span className="txt-highlight good">Täglich ab 22:30</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Analyse;
