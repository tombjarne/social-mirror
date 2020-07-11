import React from "react";

import Button from "react-bootstrap/Button";
import elon from "../../assets/img/elon-musk-profilbild.jpg";
import work from "../../assets/img/hard-work.png";
import jokes from "../../assets/img/memes.png";
import chart from "../../assets/img/chart.png";
import Modal from "react-bootstrap/Modal"

import ReactPlayer from "react-player";

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
                <div id="hero-alternative">
                    <div id="hero-cta">
                        <div>
                            <h1>Deine Wahl: </h1>
                            <span className="highlight">@elonmusk</span>
                            <p className="slim-text">Elon Musk ist ein kanadisch-US-amerikanischer Unternehmer. Besonders bekannt für</p>
                            <span className="txt-highlight"> Space X</span> <span className="txt-highlight">Tesla</span>
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
                        <h2>Aktivität</h2>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Elon Musk im Ranking</p>
                        </div>
                        <p className="slim-text">
                            <div className="ranking-harmless">
                                <div className="ranking-wrapper">
                                    <div className="authentic-wrapper">
                                        <h3 className="txt-highlight authentic-parent"><span className="authentic">*</span>Authentisch</h3>
                                    </div>
                                    <h3 className="txt-highlight good">Nicht gefährlich</h3>
                                    <h3 className="txt-highlight good">Angemessene Inhalte</h3>
                                    <h3 className="txt-highlight good">Kein Clickbait</h3>
                                    <h3 className="txt-highlight good">Jugendfreie Inhalte</h3>
                                    <h3 className="txt-highlight good">Keine Fake News</h3>
                                    <h3 className="txt-highlight mid">Sarkasmus</h3>
                                    <h3 className="txt-highlight mid">Ironie</h3>
                                    <h3 className="txt-highlight bad">Drogenkonsum<span className="info-box-helper" onClick={this.handleOpen}>i</span></h3>
                                    {
                                        this.state.clicked == true &&
                                        (
                                            <Modal.Dialog>
                                                <Modal.Header closeButton onClick={this.handleClose}>
                                                    <Modal.Title>Was bedeutet das?</Modal.Title>
                                                </Modal.Header>

                                                <Modal.Body>
                                                    <p>Elon Musk ist kein Influencer der Drongenkonsum verherrlicht oder darstellt. In einem seiner Interviews
                                                    gab es einen eher harmlosen Zwischenfall mit der Droge Marihuana. Daraufhin stürzten die Aktien seiner Firmen in die Tiefe.</p>
                                                    <div className="play-slim">
                                                        {
                                                            this.state.age == false &&
                                                            (
                                                                <Button onClick={this.showVideo} className="accept-btn">Alter bestätigen um Video anzusehen</Button>
                                                            )
                                                        }
                                                        {
                                                            this.state.age == true &&
                                                            (
                                                                <ReactPlayer id="video-player-slim" url="https://www.youtube.com/watch?v=Dr450QamBOU" />
                                                            )
                                                        }
                                                    </div>
                                                </Modal.Body>
                                            </Modal.Dialog>
                                        )
                                    }
                                </div>
                            </div>
                        </p>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Aufteilung</p>
                        </div>
                        <div className="chart-container">
                            <img src={chart} className="chart" />
                            <h3>Fazit</h3>
                            <p className="centered">Elon Musk ist ein ungefährlicher Influencer. Seine Postings belaufen sich nicht auf Werbung oder Brand Deals
                            für andere Firmen. Als Firmeninhaber und Milliardär wirbt er lediglich für seine eigenen Firmen: oft etwas humoristisch,
                            und sarkatisch. Außer wenigen Ausrutschern ist Elon sich seiner Linie treu geblieben. Ihm kann man unbedenklich folgen!</p>
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Analyse;
