import React from "react";

import Button from "react-bootstrap/Button";
import jokes from "../../assets/img/memes.png";
import friendship from "../../assets/img/happy-symbol.png";
import Modal from "react-bootstrap/Modal"

import ReactPlayer from "react-player";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import youtube from "../../assets/img/yt_icon_rgb.png";
import facebook from "../../assets/img/facebook.png";
import tiktok from "../../assets/img/tiktok-logo.png";
import reddit from "../../assets/img/reddit.png";
import FormGroup from "react-bootstrap/FormGroup";

class SocialMedia extends React.Component {

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
                            <h1>Social Media</h1>
                            <p className="slim-text">Hier erfährst du was Social Media ist, wie du es am besten nutzt und welche Plattformen für dich geeignet sind</p>
                            <h2>Womit möchtest du beginnen?</h2>
                            <div className="button-wrapper-vert">
                                <Button href="#informations" className="helper-btn">Informationen</Button>
                                <Button href="#comparison" className="helper-btn">Vergleich</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="wrapper">
                        <h3>Wusstest du, dass ...?</h3>
                        <p>dass mittlerweile knapp 3 Milliarden Menschen auf den sozialen Netzwerken angemeldet sind?
                        Das ist fast die Hälfte der gesamten Weltbevölkerung!</p>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Informationen</h2>
                        <div className="icon-container">
                            <p className="centered">
                                Die sozialen Medien erfüllen in erster Linie den Zweck der Kommunikation zwischen Menschen und der Unterhaltung.
                            </p>
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={friendship} />
                                </div>
                                <h3>Freunde</h3>
                                <p className="centered">Mit Freunden und Bekannten kommunizieren, Videos und Fotos teilen und einander anrufen: fast alle der etablierten
                                sozialen Medien haben diese oder vergleichbare Funktionen.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={jokes} />
                                </div>
                                <h3>Entertainment</h3>
                                <p className="centered">Unterhaltung ist wichtiger denn je und eine Vielfalt an Angeboten ist ebenso wichtig. Plattformen bieten ein großes
                                Angebot an verschiedenen Unterhaltungsformaten an.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Vergleich</h2>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Die sozialen Netzwerke</p>
                        </div>
                        <div id="social-media-wrapper">
                            <div className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={twitter}/>
                                    </div>
                                    <p className="txt-highlight">Twitter</p>
                                    <ul className="slim-list">
                                        <li>Hohe Anzahl an Followern</li>
                                        <li>Hohes Fachwissen</li>
                                        <li>Sozialkompetenz</li>
                                        <li>Ein Gewerbe / Job in einer Agentur</li>
                                        <li>Verkörperung eines Schönheitsideals</li>
                                        <li>Interessante Inhalte</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={instagram}/>
                                    </div>
                                    <p className="txt-highlight">Instagram</p>
                                    <ul className="slim-list">
                                        <li>Hohe Anzahl an Followern</li>
                                        <li>Hohes Fachwissen</li>
                                        <li>Sozialkompetenz</li>
                                        <li>Ein Gewerbe / Job in einer Agentur</li>
                                        <li>Verkörperung eines Schönheitsideals</li>
                                        <li>Interessante Inhalte</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={youtube}/>
                                    </div>
                                    <p className="txt-highlight">YouTube</p>
                                    <ul className="slim-list">
                                        <li>Hohe Anzahl an Followern</li>
                                        <li>Hohes Fachwissen</li>
                                        <li>Sozialkompetenz</li>
                                        <li>Ein Gewerbe / Job in einer Agentur</li>
                                        <li>Verkörperung eines Schönheitsideals</li>
                                        <li>Interessante Inhalte</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={facebook}/>
                                    </div>
                                    <p className="txt-highlight">Facebook</p>
                                    <ul className="slim-list">
                                        <li>Hohe Anzahl an Followern</li>
                                        <li>Hohes Fachwissen</li>
                                        <li>Sozialkompetenz</li>
                                        <li>Ein Gewerbe / Job in einer Agentur</li>
                                        <li>Verkörperung eines Schönheitsideals</li>
                                        <li>Interessante Inhalte</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={tiktok}/>
                                    </div>
                                    <p className="txt-highlight">TikTok</p>
                                    <ul className="slim-list">
                                        <li>Hohe Anzahl an Followern</li>
                                        <li>Hohes Fachwissen</li>
                                        <li>Sozialkompetenz</li>
                                        <li>Ein Gewerbe / Job in einer Agentur</li>
                                        <li>Verkörperung eines Schönheitsideals</li>
                                        <li>Interessante Inhalte</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={reddit}/>
                                    </div>
                                    <p className="txt-highlight">Reddit</p>
                                    <ul className="slim-list">
                                        <li>Hohe Anzahl an Followern</li>
                                        <li>Hohes Fachwissen</li>
                                        <li>Sozialkompetenz</li>
                                        <li>Ein Gewerbe / Job in einer Agentur</li>
                                        <li>Verkörperung eines Schönheitsideals</li>
                                        <li>Interessante Inhalte</li>
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

export default SocialMedia;
