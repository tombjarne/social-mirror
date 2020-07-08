import React from "react";

import Button from "react-bootstrap/Button";
import influencer from "../../assets/img/users-solid.svg";
import elon from "../../assets/img/elon-musk-profilbild.jpg";
import money from "../../assets/img/money-check-alt-solid.svg";
import work from "../../assets/img/hard-work.png";
import jokes from "../../assets/img/memes.png";
import ReactPlayer from "react-player";

class Analyse extends React.Component {

    render() {
        return (
            <section id="home">
                <div id="hero-alternative">
                    <div id="hero-cta">
                        <div>
                            <h1>Deine Wahl: </h1>
                            <span className="highlight">@elonmusk</span>
                            <p className="slim-text">Elon Musk ist ein kanadisch-US-amerikanischer Unternehmer. Besonders bekannt für
                            <span className="txt-highlight"> Space X</span> und <span className="txt-highlight">Tesla</span></p>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="wrapper">
                        <div id="hero-cta">
                            <div className="profile-wrapper">
                                <img className="profile-img" src={elon}/>
                                <h2>Elon Musk </h2>
                                <span className="highlight">36,6 Mio. Follower</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Elon Musk ist bekannt für</h2>
                        <div className="icon-container">
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={jokes} />
                                </div>
                                <h3>Memes</h3>
                                <p className="centered">Elon ist bekannt für seine humoristischen und sarkastischen Beiträge auf den sozialen Medien und im Fernsehen.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={work} />
                                </div>
                                <h3>Harte Arbeit</h3>
                                <p className="centered">Nach seinem Motto "work every waking hour" ist Elon ein sehr hart arbeitender Mensch, der sein Bestes gibt seine
                                Firmen am Leben zu erhalten und grandiose Dinge zu erschaffen.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Secrets</h2>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Brand Deals</p>
                            </div>
                            <p>
                                Keine Brand Deals bekannt.
                            </p>
                        </div>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Werbung</p>
                            </div>
                            <span href="https://www.tesla.com/" className="highlight-small">Tesla</span>
                            <span href="https://www.spacex.com/" className="highlight-small">SpaceX</span>
                            <span href="https://www.boringcompany.com/" className="highlight-small">The Boring Company</span>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Best of Elon Musk</h2>
                        <div className="icon-container-alternativ">
                            <div className="claim-actions">
                                <div className="play">
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=lKUf7DCSImM" />
                                </div>
                            </div>
                            <div className="claim-actions">
                                <div className="play">
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=zK6FSK98asc" />
                                </div>
                            </div>
                            <div className="icon-wrapper-big">
                                <p className="info-box">Social Media</p>
                            </div>
                            <p className="slim-text">
                                Social Media ist ein Oberbegriff für Websites oder Apps, die es Menschen erlauben untereinander in Kontakt zu treten und Inhalte zu teilen.
                                Doch trotz der großen Vorteile des Teilens und Vernetzens haben die sozialen Medien auch ihre Schattenseiten. Depressionen, Sucht oder
                                Abhängigkeiten, sowie die Vergötterung von Social Media Stars können die Folgen sein.
                            </p>
                        </div>
                        <Button href="#claim" className="helper-btn cta-a">Erfahre mehr</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Analyse;
