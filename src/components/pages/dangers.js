import React from "react";

import Button from "react-bootstrap/Button";
import exclamation from "../../assets/img/exclamation.png";
import friendship from "../../assets/img/happy-symbol.png";

import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import youtube from "../../assets/img/yt_icon_rgb.png";
import facebook from "../../assets/img/facebook.png";
import tiktok from "../../assets/img/tiktok-logo.png";
import reddit from "../../assets/img/reddit.png";

class Dangers extends React.Component {

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
            <section id="dangers">
                <div id="hero-dangers">
                    <div id="hero-cta">
                        <div>
                            <h1>Gefahren</h1>
                            <p className="slim-text">Die sozialen Medien sind leider nicht nur ein Platz des Austausches und der Freude.
                            Viele Jugendliche und Erwachsene haben bereits schlechte Erfahrungen auf Social Media gesammelt.</p>
                            <div className="button-wrapper-vert">
                                <Button href="#informations" className="helper-btn">Welche Gefahren gibt es?</Button>
                                <Button href="#comparison" className="helper-btn">Was kann man dagegen tun?</Button>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <h3 className="txt-highlight">Wusstest du, dass ...?</h3>
                        <p>dass auf YouTube jede Minute 300 Stunden an Videos hochgeladen wird? Pro Stunde sind das 18.000 Stunden an Videomaterial.</p>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Gefahren</h2>
                        <div className="icon-container">
                            <p className="centered">
                                Die sozialen Medien erfüllen in erster Linie den Zweck der Kommunikation zwischen Menschen und der Unterhaltung.
                            </p>
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Informationsblase</h3>
                                <p className="centered">
                                    Probanden umgeben sich online nur noch mit Personen die dieselbe Meinung teilen. Es werden nur noch Inhalte angezeigt die mit den bisherigen Interessen übereinstimmen. Man befindet sich in seiner eigenen perfekten “Blase”.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Fanliebe</h3>
                                <p className="centered">
                                    Fanliebe umfasst das nahezu krankhafte Verfolgen von Ereignissen rund um eine Person oder Influencer und kann in Ausnahmefällen sogar bis zum Stalking ausarten.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Freundschaftsdefinition</h3>
                                <p className="centered">
                                    Unter Freundschaften kann man im “echten” und digitalen Leben verschiedene Dinge verstehen. Während echte Freundschaften gepflegt werden müssen, beruhen digitale Freundschaften meist auf digitalen Begegnungen.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Blacklist</h3>
                                <p className="centered">
                                    Creator haben die Möglichkeit unter ihren Videos und Posts, Kommentare auszublenden oder zu löschen. Manche Wörter werden gleich Voraus auf eine Blacklist gesetzt, so wird der Kommentar automatisch gelöscht. Daraus folgt, dass Kritik einfach ausgeblendet werden kann.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Vorbildfunktion</h3>
                                <p className="centered">
                                    Influencer und Personen mit hoher Reichweite in den sozialen Medien dienen einer gewissen Vorbildfunktion für ihre Fans und Follower. Diese Personen schlüpfen ab einer gewissen Reichweite automatisch in die Rolle eines Vorbildes - ob gewollt oder nicht.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Ideale</h3>
                                <p className="centered">Social Media vertritt durch seine “mächtigsten” Influencer gewisse Ideale. Ob Schöheitsideale, Wohnideale oder persönliche Ideale. Das Leben dieser Influencer wird beschönigt und nur auf seine besten Momente reduziert. Dies kann zu einer Vermittlung falscher oder unwahrheitsgemäßer Ideale führen.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Niedrige Hemmschwelle</h3>
                                <p className="centered">
                                    Beim Teilen, Kommentieren und Reagieren auf Beiträge von Freunden oder anderen Nutzern liegt die Hemmschwelle für anstößige oder unangebrachte Inhalte sehr niedrig. Folglich können daraus ein Streit oder ein Shitstorm entstehen.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Status</h3>
                                <p className="centered">
                                    Influencer sind nicht nur Internetberühmtheiten - Personen mit hoher Reichweite aus den verschiedensten Bereichen können ebenso als Influencer angesehen werden. Ihr Status als Influencer impliziert oft Glaubwürdigkeit und Professionalität. Dennoch ist das nicht immer der Fall und kann eine leichte Falle darstellen.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Konsistenztheorie</h3>
                                <p className="centered">
                                    Modell das beschreibt wie ein System Meinung bildet oder versucht zu ändern. Ein Fan bekommt von der Erfahrung eines Produktes und seinem Influencers mit. Ist diese positiv, ändert auch der Fan seine Einstellung gegenüber dem Produkt und empfindet es auch als positiv.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Unerreichbarkeit</h3>
                                <p className="centered">
                                    Viele Fans versuchen zu ihren Idolen und Vorbildern in Kontakt zu treten, doch nur die wenigsten haben die Zeit und Ressourcen dafür dies zu tun. In vielen Fällen wird der Kontakt von Agenturen o.Ä. übernommen, so dass die Interaktion mit Fans nur bedingt “echt” stattfindet.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Framing</h3>
                                <p className="centered">
                                    Die Ersetzung einer Formulierung ohne dessen Inhalten zu verändern. Bsp. “Das Glas ist halbvoll” und “Das Glas ist halbleer”. So kann dieselbe Information in mehreren Perspektiven dargestellt werden. Das führt wiederum zur Manipulation der Konsumenten.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Mere Exposure Effect</h3>
                                <p className="centered">
                                    Darunter versteht man das Phänomen, dass eine Sache nach oftmaligem wiederholen deutlich positiver wahrgenommen wird, als sie tatsächlich ist. Besonders in der Werbung kann dieser Effekt deutlich spürbar sein.
                                </p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={exclamation} />
                                </div>
                                <h3>Social Media Bots</h3>
                                <p className="centered">
                                    Für eigene Meinungsbildung spielt die Aussage dritter eine wichtige Rolle. Die Bots verbreiten die Ansicht das viele Leute einer bestimmten Meinung sind. Entweder man ändert seine Meinung oder hält sich zurück(Selbstzensur). So demotivieren Bots den Person und stimmen diese zu einer anderen Meinung um.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Lösungsansätze</h2>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Informationsblase</p>
                        </div>
                        <div id="social-media-wrapper">
                            <div className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={exclamation}/>
                                    </div>
                                    <p className="txt-highlight good">Umgib dich mit verschiedenen Menschen</p>
                                    <ul className="slim-list">
                                        <li>Folge verschiedensten Bekanntheiten und Influencern</li>
                                        <li>Folge nur Influencern, die dir vertrauenswürdig erscheinen</li>
                                        <li>Frage deine Familie um Mithilfe, falls dir etwas suspekt vorkommt</li>
                                        <li>Hol dir Meinungen außerhalb von Social Media z.B. im Fernsehen oder Radio</li>
                                        <li>Glaube nicht alles was auf den sozialen Medien gesagt wird</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="icon-wrapper-big">
                            <p className="info-box">Freundschaften</p>
                        </div>
                        <div id="social-media-wrapper">
                            <div className="image-container-wrapper">
                                <div className="image-container">
                                    <div>
                                        <img className="image-icon" src={exclamation}/>
                                    </div>
                                    <p className="txt-highlight good">Freundschaften auf den sozialen Medien dürfen in keinem Fall
                                    deine echten Freundschaften ersetzen!
                                    </p>
                                    <ul className="slim-list">
                                        <li>Verabrede dich einmal pro Woche mit deinen Freunden</li>
                                        <li>Chatte auch nur mit Personen, die du kennst oder denen du vertrauen kannst!</li>
                                        <li>Mach etwas anderes und verfolge ein Hobby, dass du notfalls auch alleine durchführen kannst</li>
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

export default Dangers;
