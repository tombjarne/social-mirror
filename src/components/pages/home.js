import React from "react";

import Button from "react-bootstrap/Button";

import influencer from "../../assets/img/users-solid.svg";
import user from "../../assets/img/user-alt-solid.svg";
import money from "../../assets/img/money-check-alt-solid.svg";
import videos from "../../assets/img/camera.png";
import ReactPlayer from "react-player";

class Home extends React.Component {

    render() {
        return (
            <section id="home">
                <div id="hero">
                    <div id="hero-cta">
                        <h1>Bereit Social Media den Kampf anzusagen?</h1>
                        <p className="slim-text">Wir helfen dir dabei dein digitales Leben zu strukturieren und die sozialen Medien einen besseren Ort für dich zu machen.
                        Kostenfrei mit garantierten Belohnungen für deinen Fortschritt.</p>
                        <div className="button-wrapper">
                            <Button href="/test" className="helper-btn">Teste dich</Button>
                            <Button href="/wissen" className="helper-btn-small">Erfahre mehr</Button>
                        </div>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Das tun wir für Dich</h2>
                        <div className="icon-container">
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={user} />
                                </div>
                                <h3>Monitoring</h3>
                                <p className="centered">Wir helfen dir Deine Social Media Nutzung zu optimieren. Mehr Spaß in den Sozialen Medien in weniger Zeit!</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={money} />
                                </div>
                                <h3>Blick hinter die Kulissen</h3>
                                <p className="centered">Wir geben dir einen Einblick in die Welt der Stars und Influencer und wie sie die sozialen Medien geschickt als Geldquelle nutzen</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={influencer} />
                                </div>
                                <h3>Influencer</h3>
                                <p className="centered">Wie viel Einfluss haben Influencer? Was machen Influencer? Erfahre alles rund ums Thema Influencer</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={videos} />
                                </div>
                                <h3>Videos</h3>
                                <p className="centered">Wir haben dir eine Sammlung von sehenswerten Filmen und Reportagen zusammengestellt, bei denen es Rund um Social Media geht</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Probier's aus!</h2>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Monitoring</p>
                            </div>
                            <p>
                                Zusammen sind wir stark! Wir helfen Dir dabei Social Media besser zu nutzen und mehr Spaß zu haben! Für jeden Fortschritt den du machst
                                erhältst du außerdem coole Prämien und Preise.
                            </p>
                        </div>
                        <Button href="#claim" className="helper-btn cta-a">Analysiere dein Profil</Button>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Was ist Social Media?</h2>
                        <div className="icon-container-alternativ">
                            <div className="claim-actions">
                                <div className="play">
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=E2q0V1VEj_c" />
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
                        <Button className="helper-btn cta" onClick={() => window.location.href="./wissen/social-media"}>Erfahre mehr</Button>
                    </div>
                </div>

                <div className="info-dark">
                    <div className="wrapper">
                        <h2>Mehr über Influencer</h2>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Neugierig geworden?</p>
                            </div>
                            <p className="slim-text">
                                Wolltest du schon immer einmal deinem Lieblingsinfluencer auf den Zahn fühlen? Wir zeigen dir, wie Influencer ihr Geld verdienen und welche
                                Mittel sie dazu benutzen. Probier es aus!
                            </p>
                        </div>
                        <Button href="./wissen/influencer" className="helper-btn cta-a">Blick hinter die Kulissen</Button>
                    </div>
                </div>
                <div className="info-bright">
                    <div className="wrapper">
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Influencer</p>
                            </div>
                            <p className="slim-text">
                                Erfahre mehr über den Beruf eines Influencers und lerne verschiedene Seiten der Arbeit auf Social Media kennen.
                            </p>
                        </div>
                        <Button className="helper-btn cta" onClick={() => window.location.href="./wissen/influencer"}>Erfahre mehr</Button>
                    </div>
                </div>
                <div className="info">
                    <div className="wrapper">
                        <h2>Videos</h2>
                        <div className="icon-container-alternativ">
                            <p className="slim-text">
                                Sieh dir diese von uns kurierten Videos zum Thema Social Media an! Dabei geht's rund ums Berufsbild, die Arbeiten und die Folgen des
                                Influencerdaseins. Schau vorbei!
                            </p>
                        </div>
                        <Button onClick={() => window.location.href="./wissen/influencer/videos"} className="helper-btn cta">Zu den Videos</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
