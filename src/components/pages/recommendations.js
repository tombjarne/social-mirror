import React from "react";

import Button from "react-bootstrap/Button";
import friendship from "../../assets/img/happy-symbol.png";

import localpost from "../../assets/img/localpost.png";
import youtube from "../../assets/img/yt_icon_rgb.png";
import friends from "../../assets/img/user-alt-solid.png";
import facebook from "../../assets/img/facebook.png";
import meetup from "../../assets/img/Meetup_Logo.png";
import mightynetworks from "../../assets/img/mightynetworks.png";

class Recommendations extends React.Component {

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
                            <h1>Empfehlungen</h1>
                            <p className="slim-text">Welche Empfehlungen und Tipps wir dir geben können ein sozialeres Leben auf Social Media ausleben zu können?</p>
                            <div className="button-wrapper-vert">
                                <Button href="#tipps" className="helper-btn">Tipps</Button>
                                <Button href="#plattformen" className="helper-btn">Features & Plattformen</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Tipps</h2>
                        <div id="tipps" className="icon-container">
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={friendship} />
                                </div>
                                <h3>Tu, was dich glücklich macht</h3>
                                <p className="centered slim-text">Verwende deine sozialen Plattformen für positive Dinge und verbringe Zeit damit dich mit Sachen
                                zum umgeben die dich glücklich machen. Erfahre wie du deine
                                <a href="https://editionf.com/social-media-gluecklich-anstatt-frustriert-anleitung"> Social Media Nutzung</a> veränderst.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={friends} />
                                </div>
                                <h3>Lade deine Freunde ein</h3>
                                <p className="centered slim-text">Zusammen macht's immer mehr Spaß! Lade deine Freunde zu deinen sozialen Medien ein. So könnt
                                ihr euch besser austauschen und mehr über Gemeinsamkeiten und Hobbies erfahren.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Features & Plattformen</h2>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Features</p>
                        </div>
                        <div id="social-media-wrapper">
                            <div id="comparison" className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={facebook}/>
                                    </div>
                                    <h3 className="txt-highlight">Facebook SocialGroups</h3>
                                    <ul className="slim-list">
                                        <li>News & Nachrichten</li>
                                        <li>Memes</li>
                                        <li>Kontroverse Inhalte</li>
                                        <li>Meinungen teilen</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={youtube}/>
                                    </div>
                                    <h3 className="txt-highlight">YouTube Newcomer Feature</h3>
                                    <ul className="slim-list">
                                        <li>News & Nachrichten</li>
                                        <li>Memes</li>
                                        <li>Kontroverse Inhalte</li>
                                        <li>Meinungen teilen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Plattformen</p>
                        </div>
                        <div id="social-media-wrapper">
                            <div id="comparison" className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={mightynetworks}/>
                                    </div>
                                    <h3 className="txt-highlight">MightyNetworks</h3>
                                    <ul className="slim-list">
                                        <li>News & Nachrichten</li>
                                        <li>Memes</li>
                                        <li>Kontroverse Inhalte</li>
                                        <li>Meinungen teilen</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={meetup}/>
                                    </div>
                                    <h3 className="txt-highlight">Meetup</h3>
                                    <ul className="slim-list">
                                        <li>News & Nachrichten</li>
                                        <li>Memes</li>
                                        <li>Kontroverse Inhalte</li>
                                        <li>Meinungen teilen</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={localpost}/>
                                    </div>
                                    <h3 className="txt-highlight">local post</h3>
                                    <ul className="slim-list">
                                        <li>News & Nachrichten</li>
                                        <li>Memes</li>
                                        <li>Kontroverse Inhalte</li>
                                        <li>Meinungen teilen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Recommendations;
