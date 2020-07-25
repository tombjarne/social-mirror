import React from "react";

import Button from "react-bootstrap/Button";
import friendship from "../../assets/img/happy-symbol.png";

import localpost from "../../assets/img/localpost.png";
import youtube from "../../assets/img/yt_icon_rgb.png";
import friends from "../../assets/img/user-alt-solid.png";
import facebook from "../../assets/img/facebook.png";
import meetup from "../../assets/img/Meetup_Logo.png";
import mightynetworks from "../../assets/img/mightynetworks.png";
import socialgroups from "../../assets/img/facebook-2-map.png";
import newcomer from "../../assets/img/newcomer.png";

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
                            <p className="slim-text">Wir zeigen dir einige Plattformen und Tipps, die du unbedingt ausprobieren solltest!</p>
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
                            <div id="plattformen" className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img alt=""className="image-icon" src={facebook}/>
                                    </div>
                                    <h3 className="txt-highlight">Facebook SocialGroups</h3>
                                </div>
                                <div className="img-container">
                                    <img alt=""className="small-img" src={socialgroups}/>
                                </div>
                                <ul className="slim-list">
                                    <li>Meetups erstellen & neue Leute treffen</li>
                                    <li>Mehr Konversation über aktuelle Themen</li>
                                </ul>
                                <p className="centered slim-text">Eine SocialGroup ist eine Gruppe wie jede andere, jedoch mit extra Anforderungen und Regeln, die das Sozialisieren in der
                                    echten Welt vereinfachen sollen. Angeknüpft an die Facebook Events kann hier jeder “verifizierte” User ein gruppeninternes Event zum Treffen im
                                    realen Leben einstellen.</p>
                                <div className="image-container">
                                    <div>
                                        <img alt=""className="image-icon" src={youtube}/>
                                    </div>
                                    <h3 className="txt-highlight">YouTube Newcomer Feature</h3>
                                </div>
                                <div className="img-container">
                                    <img alt=""className="small-img" src={newcomer}/>
                                </div>
                                <ul className="slim-list">
                                    <li>Neue, kreative Inhalt entdecken</li>
                                    <li>Andere Meinungen und Blickwinkel kennenlernen</li>
                                </ul>
                                <p className="centered slim-text">Die Newcomer Funktion erlaubt es ungefiltert und nach Beliebtheit ausgewählte Videos auf YouTube zu entdecken.
                                Dabei werden kleine oder mittelgroße YouTuber hervorgehoben, um auch ihnen die Chance zu geben ein erfolgreicher Creator zu werden.</p>
                            </div>
                        </div>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Plattformen</p>
                        </div>
                        <div id="social-media-wrapper">
                            <div id="comparison" className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img alt=""className="image-icon" src={mightynetworks}/>
                                    </div>
                                    <h3 className="txt-highlight">MightyNetworks</h3>
                                    <p className="slim-text">Ein Registrieren bei MightyNetworks ist besonders für Personen sinnvoll, die sich mit spezifischen
                                    Hobbies oder Berufen beschäftigen. Hier gibt es verschiedene kleine und hilfsbreite Communities, die auch lokal sehr stark
                                    vertreten sind.</p>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img alt=""className="image-icon" src={meetup}/>
                                    </div>
                                    <h3 className="txt-highlight">Meetup</h3>
                                    <p className="slim-text">Ein Registrieren bei Meetup ist besonders für ehrgeizige und enthusiastische Personen ratsam. Für nahezu
                                    jede Profession gibt es ein Meetup, welches Menschen mit ähnlichen Interessen im echten Leben zusammenbringt. Außerdem gibt es online
                                    die Möglichkeit sich über die Themen auszutauschen oder digitale Inhalte zu teilen.</p>
                                </div>
                                <div className="image-container">
                                    <div>
                                        <img alt=""className="image-icon" src={localpost}/>
                                    </div>
                                    <h3 className="txt-highlight">local post</h3>
                                    <p className="slim-text">Ein Registrieren bei local post ist besonders für Junge und heimatverwurzelte Menschen empfehlenswert.
                                    Hier werden aktuelle, lokale Themen diskutiert und Gedanken geteilt. Die Sichtbarkeit ist dabei immer auf einen bestimmten Radius begrenzt,
                                    um Städte oder Gemeiden näher aneinander zu bringen.</p>
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
