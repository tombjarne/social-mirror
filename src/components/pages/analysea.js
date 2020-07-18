import React from "react";

import Button from "react-bootstrap/Button";
import logan from "../../assets/img/logan-profilbild.jpg";
import exclamation from "../../assets/img/exclamation.png";
import jokes from "../../assets/img/memes.png";
import chart from "../../assets/img/chart-logan.png";
import Modal from "react-bootstrap/Modal"

import ReactPlayer from "react-player";

class Analysea extends React.Component {

    constructor(props) {
        super (props);

        this.state = {
            clicked: false,
            age: false,
            text: "",
            url: "",
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.showVideo = this.showVideo.bind(this);
    }

    handleOpen(){
        this.setState({
            clicked: true,
            text: "In einem seiner kontroversesten Videos hat Logan Paul einen Wald in Japan besucht, in dem viele Menschen Suizid begangen haben. In seinem Video" +
                "zeigte Logan die Leichen und witzelte über die Umgekommenen und deren Todesumstände.",
            url: "https://www.youtube.com/watch?v=WjNFGZLJLss",
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
                <div id="hero-alternative-a">
                    <div id="hero-cta">
                        <div>
                            <h1>Deine Wahl: </h1>
                            <span className="highlight">@loganpaul</span>
                            <p className="slim-text">Logan Paul ist ein US-amerikanischer Social-Media-Star. Besonders bekannt für</p>
                            <span className="txt-highlight">Suicide Forest</span> <span className="txt-highlight">Boxkampf mit KSI</span>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="wrapper">
                        <div id="hero-cta">
                            <div className="profile-wrapper">
                                <img className="profile-img" src={logan}/>
                                <h2>Logan Paul</h2>
                                <span className="highlight">18,2 Mio. Follower</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Logan Paul ist bekannt für</h2>
                        <div className="icon-container">
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={jokes} />
                                </div>
                                <h3>Fragwürdiger Humor</h3>
                                <p className="centered">Logan ist bekannt für seine kindhaften Scherze und seinen gewöhnungsbedürftigen Humor.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Kontroversen</h3>
                                <p className="centered">Logan Paul ist besonders für Kontroversen und Auseinandersetzugen bekannt. Seine bekanntesten Videos sind
                                besonders anstößig und umstritten.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Aktivität</h2>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Logan Paul im Ranking</p>
                        </div>
                        <p className="slim-text">
                            <div className="ranking-harmless">
                                <div className="ranking-wrapper">
                                    <h3 className="txt-highlight good">Unterhaltungszwecke</h3>
                                    <h3 className="txt-highlight mid">Clickbait</h3>
                                    <h3 className="txt-highlight mid">Vulgärsprache</h3>
                                    <h3 className="txt-highlight mid">Potenziell gefährlich</h3>
                                    <h3 className="txt-highlight mid">Keine Jugendfreie Inhalte</h3>
                                    <h3 className="txt-highlight bad">Suizid<span className="info-box-helper" onClick={this.handleOpen}>i</span></h3>
                                    {
                                        this.state.clicked == true &&
                                        (
                                            <Modal.Dialog>
                                                <Modal.Header closeButton onClick={this.handleClose}>
                                                    <Modal.Title>Was bedeutet das?</Modal.Title>
                                                </Modal.Header>

                                                <Modal.Body>
                                                    <p>{this.state.text}</p>
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
                                                                <ReactPlayer id="video-player-slim" url={this.state.url} />
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
                            <p className="centered">Logan Paul ist ein eher als gefährlich einzustufender Influencer.
                                Nahezu alle seiner Beiträge werden mit einen Link oder einem gesponsertem Produkt versehen. Des Weiteren stellt er gerne kontroverse und
                                beleidigende Inhalte auf seinen Plattformen zur Verfügung.</p>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Best of Logan Paul</h2>
                        <div className="icon-container-alternativ">
                            <div className="claim-actions">
                                <div className="play">
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=fYK27ivcRLU&t=33s" />
                                </div>
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
                            <p className="icon-container-alternativ">
                                <span href="https://www.versace.com/de/de-de/home/" className="highlight-small">Versace</span>
                                <span href="https://www.mercedes-benz.de/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE" className="highlight-small">Mercedes Benz</span>
                                <span href="https://maverickclothing.com/" className="highlight-small">Maverick</span>
                            </p>
                        </div>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Werbung</p>
                            </div>
                            <span href="https://maverickclothing.com/" className="highlight-small">Maverick</span>
                            <span href="https://www.versace.com/de/de-de/home/" className="highlight-small">Versace</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Analysea;
