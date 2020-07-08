import React from "react";

import Button from "react-bootstrap/Button";
import influencer from "../../assets/img/users-solid.svg";
import user from "../../assets/img/user-alt-solid.svg";
import money from "../../assets/img/money-check-alt-solid.svg";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import ReactPlayer from "react-player";

class Knowledge extends React.Component {

    render() {
        return (
            <section id="home">
                <div id="hero">
                    <div id="hero-cta">
                        <Form className="fullwidth">
                            <div className="form-wrapper">
                                <h3>Suche einen Influencer</h3>
                                <InputGroup>
                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                    <Button type="submit" >Submit</Button>
                                </InputGroup>
                            </div>
                        </Form>
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
                        <Button href="#claim" className="helper-btn cta-a">Erfahre mehr</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Knowledge;
