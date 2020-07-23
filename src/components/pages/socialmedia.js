import React from "react";

import Button from "react-bootstrap/Button";
import jokes from "../../assets/img/memes.png";
import friendship from "../../assets/img/happy-symbol.png";

import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import youtube from "../../assets/img/yt_icon_rgb.png";
import exclamation from "../../assets/img/exclamation.png";
import facebook from "../../assets/img/facebook.png";
import tiktok from "../../assets/img/tiktok-logo.png";
import reddit from "../../assets/img/reddit.png";
import mightynetworks from "../../assets/img/mightynetworks.png";
import meetup from "../../assets/img/Meetup_Logo.png";
import localpost from "../../assets/img/localpost.png";

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
                        <div id="informations" className="icon-container">
                            <p className="centered slim-text">
                                Die sozialen Medien erfüllen in erster Linie den Zweck der Kommunikation zwischen Menschen und der Unterhaltung.
                            </p>
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={friendship} />
                                </div>
                                <h3>Freunde</h3>
                                <p className="centered slim-text">Mit Freunden und Bekannten kommunizieren, Videos und Fotos teilen und einander anrufen: fast alle der etablierten
                                sozialen Medien haben diese oder vergleichbare Funktionen.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={jokes} />
                                </div>
                                <h3>Entertainment</h3>
                                <p className="centered slim-text">Unterhaltung ist wichtiger denn je und eine Vielfalt an Angeboten ist ebenso wichtig. Plattformen bieten ein großes
                                Angebot an verschiedenen Unterhaltungsformaten an.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3 className="txt-highlight">Betrug</h3>
                                <p className="centered slim-text">Nicht alle Plattformen sind sicher! Die sozialen Medien sind ein perfekter Platz für Kriminelle dort ihren
                                    Machenschaften nachzugehen. Oft kann es sein, dass deine persönlichen Daten einfach so ins Internet
                                    gelangen. Damit kann großer Schaden angerichtet werden.</p>
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
                            <div id="comparison" className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={twitter}/>
                                    </div>
                                    <p className="txt-highlight">Twitter</p>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Memes</h3>
                                        <h3 className="txt-highlight mid">Potenziell Unsicher</h3>
                                        <h3 className="txt-highlight bad">Fake News</h3>
                                        <h3 className="txt-highlight bad">Toxic Community</h3>
                                        <h3 className="txt-highlight bad">Hass & Hetze</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>News & Nachrichten</li>
                                        <li>Memes</li>
                                        <li>Kontroverse Inhalte</li>
                                        <li>Meinungen teilen</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={instagram}/>
                                    </div>
                                    <p className="txt-highlight">Instagram</p>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Schöne Fotos</h3>
                                        <h3 className="txt-highlight mid">Anstößige Inhalte</h3>
                                        <h3 className="txt-highlight mid">Potenziell Unsicher</h3>
                                        <h3 className="txt-highlight bad">Profitorientiert</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>Fotos & Videos</li>
                                        <li>Führende Influencerplattform</li>
                                        <li>Kommentieren & Liken</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={youtube}/>
                                    </div>
                                    <p className="txt-highlight">YouTube</p>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Sehr große Auswahl</h3>
                                        <h3 className="txt-highlight mid">Anstößige Inhalte</h3>
                                        <h3 className="txt-highlight mid">Niedrige Hemmschwelle</h3>
                                        <h3 className="txt-highlight mid">Potenziell Unsicher</h3>
                                        <h3 className="txt-highlight bad">Profitorientiert</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>Videos</li>
                                        <li>Führende Werbeplattform</li>
                                        <li>Kommentieren & Liken</li>
                                        <li>Inhalte selbst erstellen</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={facebook}/>
                                    </div>
                                    <p className="txt-highlight">Facebook</p>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Nachrichten</h3>
                                        <h3 className="txt-highlight good">Live Übertragungen</h3>
                                        <h3 className="txt-highlight mid">Viel Werbung</h3>
                                        <h3 className="txt-highlight mid">Potenziell Unsicher</h3>
                                        <h3 className="txt-highlight bad">Profitorientiert</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>Fotos, Videos & Text</li>
                                        <li>Führende Werbeplattform</li>
                                        <li>Kommentieren & Liken</li>
                                        <li>Erstellen eigener Seiten</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={tiktok}/>
                                    </div>
                                    <p className="txt-highlight">TikTok</p>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Kreative Videos</h3>
                                        <h3 className="txt-highlight mid">Verwirrende Inhalte</h3>
                                        <h3 className="txt-highlight mid">Potenziell Unsicher</h3>
                                        <h3 className="txt-highlight bad">Profitorientiert</h3>
                                        <h3 className="txt-highlight bad">Chinas Zensur</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>Videos & Live Übertragungen</li>
                                        <li>Führende Influencerplattform</li>
                                        <li>Kommentieren & Liken</li>
                                        <li>Selbst Inhalte erstellen</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={reddit}/>
                                    </div>
                                    <p className="txt-highlight">Reddit</p>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Memes</h3>
                                        <h3 className="txt-highlight good">Kommunikation zwischen Groß und Klein</h3>
                                        <h3 className="txt-highlight mid">Anstößige Inhalte</h3>
                                        <h3 className="txt-highlight mid">Verwirrende Inhalte</h3>
                                        <h3 className="txt-highlight bad">Profitorientiert</h3>
                                        <h3 className="txt-highlight bad">Toxic Community</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>Fragen, Diskussionen & Antworten</li>
                                        <li>Memes & Videos</li>
                                        <li>Kommentieren & Liken</li>
                                        <li>Themenbasiert</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={mightynetworks}/>
                                    </div>
                                    <h3 className="txt-highlight">MightyNetworks</h3>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Große Auswahl</h3>
                                        <h3 className="txt-highlight good">Spezifische Communities</h3>
                                        <h3 className="txt-highlight mid">Anstößige Inhalte</h3>
                                        <h3 className="txt-highlight mid">Verwirrende Inhalte</h3>
                                        <h3 className="txt-highlight mid">Sozialisierung schwierig</h3>
                                        <h3 className="txt-highlight bad">Admin- abhängig</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>Spezielle Fragen</li>
                                        <li>Nischenthemen & Interessen</li>
                                        <li>Chatten</li>
                                        <li>Kommentieren</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={meetup}/>
                                    </div>
                                    <h3 className="txt-highlight">Meetup</h3>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Professionell</h3>
                                        <h3 className="txt-highlight good">Breite Auswahl an Gruppen</h3>
                                        <h3 className="txt-highlight mid">Ausgrenzung</h3>
                                        <h3 className="txt-highlight bad">Eventuell schlechte Meetups</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>Austausch & Treffen</li>
                                        <li>Kommentieren & Liken</li>
                                        <li>Meetups erstellen & teilnehmen</li>
                                    </ul>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={localpost}/>
                                    </div>
                                    <h3 className="txt-highlight">local post</h3>
                                    <div className="social-media-ranking">
                                        <h3 className="txt-highlight good">Lokale Welt entdecken</h3>
                                        <h3 className="txt-highlight good">Aktuelle Geschehnisse</h3>
                                        <h3 className="txt-highlight mid">Anstößige Inhalte</h3>
                                        <h3 className="txt-highlight bad">Eventuell schlechte Meetups</h3>
                                    </div>
                                    <ul className="slim-list">
                                        <li>Aktuelle, lokale Unterhaltungen</li>
                                        <li>Liken, Kommentieren & Speichern</li>
                                        <li>Videos & Meetups erstellen</li>
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
