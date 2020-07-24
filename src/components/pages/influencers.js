import React from "react";

import Button from "react-bootstrap/Button";
import happy from "../../assets/img/happy-symbol.png";
import ad from "../../assets/img/werbung-symbol.png";
import money from "../../assets/img/euro-symbol.png";
import ex1 from "../../assets/img/instagram-example-1.jpg";
import ex2 from "../../assets/img/instagram-example-2.jpg";
import FormControl from "react-bootstrap/FormControl";
import ReactPlayer from "react-player";

class Influencers extends React.Component {

    render() {
        return (
            <section id="home">
                <div id="hero">
                    <div id="hero-cta">
                        <div>
                            <h1>Influencer</h1>
                            <p className="slim-text">Influencer sind Personen oder Unternehmen, die auf Social Media besonders viele Follower oder Fans besitzen
                            und Geld durch Werbung verdienen. Besonders für Unternehmer ist die Werbung durch Influencer heutzutage sehr interessant und lukrativ geworden.</p>
                        </div>
                        <div className="large-form-wrapper">
                            <h2>Suche einen Influencer</h2>
                            <div className="large-input-group">
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="search-input"
                                />
                                <Button type="submit" onClick={() => window.location.href="./influencer/analyse/1000"}>Suchen</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Auf einen Blick</h2>
                        <div className="icon-container">
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon corrected-img" alt="" src={money} />
                                </div>
                                <h3>Verdienst / Einkommen</h3>
                                <p className="slim-text">Influencer ist prinzipiell ein Beruf wie jeder andere. Influencer werden häufig von Agenturen oder Firmen beauftragt
                                ihre Produkte oder Marke zu repräsentieren. Für diese Leistungen erhalten die <a className="link" href="https://www.karriere.at/beruf/influencer">Influencer</a> Geld. Im Gegenzug erhält die Firma mehr Reichweite.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={ad} />
                                </div>
                                <h3>Werbung / Produkte</h3>
                                <p className="slim-text">Vielleicht hast du schon einmal beobachtet, dass Influencer für Produkte werben oder sogar ihre eigenen Artikel verkaufen. Doch häufig wird
                                die Werbung auch so geschickt versteckt, dass sie unterschwellig ins Bewusstsein fließt. Manchmal ohne jegliche Kennzeichnung, dass es sich
                                tatsächlich um Werbung handelt.</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={happy} />
                                </div>
                                <h3>Zufriedenheit / Glücklichkeit</h3>
                                <p className="slim-text">Influencer sind nicht den ganzen Tag gücklich. Produkte verkaufen sich jedoch nur gut, wenn ein optimales, perfektes Leben vorgetäuscht oder
                                suggeriert wird. Dem Nutzer wird letztendlich oft ein Szenario vorgespielt, das zwar erstrebenswert, jedoch nur selten erreichbar ist.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Der Beruf Influencer</h2>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Vorraussetzungen</p>
                            </div>
                            <p className="slim-text">
                                Um Influencer zu sein werden nur einige Vorraussetzungen benötigt. Grundsätzlich brauchst du nur ein Smartphone, einen Account auf einer beliebigen
                                Social Media Plattform und Inhalte. Des Weiteren müssen Influencer besondere Vorraussetzungen erfüllen
                            </p>
                            <ul className="slim-list">
                                <li>Hohe Anzahl an Followern</li>
                                <li>Hohes Fachwissen</li>
                                <li>Sozialkompetenz</li>
                                <li>Ein Gewerbe / Job in einer Agentur</li>
                                <li>Verkörperung eines Schönheitsideals</li>
                                <li>Interessante Inhalte</li>
                            </ul>
                        </div>
                        <Button href="./influencer/videos#if-marketing" className="helper-btn cta-a">Zum Video: Influencermarketing</Button>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Berufsalltag</p>
                            </div>
                            <p className="slim-text">
                                Als Influencer verkauft man Produkte. Der Alltag besteht aus der besonders ansprechenden oder interessanten Präsentation von Produkten, die den Fans
                                und Followern dann erfolgreich verkauft werden sollen. <a href="https://www.studycheck.de/berufe/influencer">So sieht ein Tag eines Influencers aus</a>. Ein Influencer ist sozusagen der Marktschreier des 21 Jahrhunderts mit den Zielen
                            </p>
                            <ul className="slim-list">
                                <li>So viel wie möglich zu verkaufen</li>
                                <li>Mehr Fans zu generieren</li>
                                <li>Neue Deals abzuschließen</li>
                                <li>Trends zu folgen</li>
                                <li>Selbstvermarktung zu betreiben</li>
                            </ul>
                            <Button href="./influencer/videos#if-traumjob" className="helper-btn cta-a">Zum Video: Traumjob</Button>
                        </div>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Nachteile / Gefahren</p>
                            </div>
                            <p className="slim-text">
                                Das mag ja alles ganz schön und toll klingen, doch warum auf einmal Nachteile? Für den Influencer selbst hat das natürlich keine Nachteile viele
                                Produkte zu verkaufen. Die Kunden sind oft Minderjährige mit wenig Kaufkraft oder Entscheidungsvermögen. Diese Zielgruppe wird von vielen
                                Influencern schamlos ausgenutzt sinnlose oder überteuerte Produkte zu verkaufen. Normal läuft das so ab
                            </p>
                            <ul className="slim-list">
                                <li className="counted-list">Der Influencer versucht Menschen von sich zu begeistern</li>
                                <li className="counted-list">Influencer nimmt Vorbildfunktion ein</li>
                                <li className="counted-list">Influencer erreicht Idolstatus</li>
                                <li className="counted-list">Verkaufen eines Produktes</li>
                            </ul>
                            <Button href="#video-player" className="helper-btn cta-a">Zum Video: Influencerlifestyle</Button>
                            <p className="slim-text">
                                Der respektlose und teilweise schwammige Umgang mit Kennzeichnungen, Clickbait oder anstößigen Inhalten hat dennoch auch für die Agenturen oder Firmen folgen,
                                die den Influencer beauftragt haben. Leistet sich ein Influencer einen groben Fehler, kann das besonders für die Auftraggeber
                                <a className="link" href="https://www.web-netz.de/blog/influencer-marketing-risiken/"> verheerende Folgen </a>
                                mit sich ziehen.
                            </p>
                            <p className="slim-text">
                                Das Verkaufen der Produkte kann auf vielerlei Wege geschehen. Einerseits können die Produkte direkt mit Werbung gekennzeichnet sein und gut auf dem
                                Bild oder Video sichtbar sein. Hier ist es offensichtlich, dass es sich um Werbung handelt. Doch häufig ist es die unterschwellige Werbung, die
                                vom Influencer geschickt platziert wird. Hier ein Beispiel hierzu
                            </p>
                            <div className="img-container">
                                <img className="small-img" src={ex1}/>
                            </div>
                            <div className="img-container">
                                <img className="small-img" src={ex2}/>
                            </div>
                            <p className="slim-text">
                                Die obige Produktpräsentation wirkt deutlich natürlicher und gewohnter, obwohl das ganze Szenario gestellt ist. Oft sind Influencer einen ganzen Tag damit
                                beschäftigt ein solches Bild zu produzieren. Der Text ist ebenfalls ausschlaggebend. Während ein mit Werbung bombadierter Post unseriös wirkt,
                                kommt der "aus dem Leben genommene" Beitrag viel besser und professioneller an.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="wrapper">
                        <h2>Influencer und ihre Gefahren</h2>
                        <div className="icon-container-alternativ">
                            <div className="claim-actions">
                                <div className="play">
                                    <ReactPlayer id="video-player" url="https://www.youtube.com/watch?v=ogja5YT7Wfc" />
                                </div>
                            </div>
                            <div className="icon-wrapper-big">
                                <p className="info-box">Problem 1: Doppelleben</p>
                            </div>
                            <p className="slim-text">
                                Die meisten Influencer teilen in Wirklichkeit gar nicht ihr echtes Leben, sondern nur das, was davon sichtbar sein soll. Irgendwie verständlich, denn
                                keiner teilt gerne Fotos von sich auf denen man traurig oder wütend ist. Oft ist das Leben eines Influencers auf Social Media bei weitem nicht das,
                                welches sie vorgeben.
                            </p>
                            <div className="icon-wrapper-big">
                                <p className="info-box">Problem 2: Falsche Ideale</p>
                            </div>
                            <p className="slim-text">
                                Influencer vermitteln falsche Ideale indem sie ein Leben darstellen, das überhaupt nicht realistisch ist und sein kann. Wer würde sich kein Leben wünschen,
                                indem er nichts tun muss, das Geld von alleine kommt und ein Strandhaus auf Ibiza besitzt? Richtig, fast jeder. Doch auch die Influencer haben kein solches
                                Leben. Der User wird getäuscht zu glauben, dass Influencer das perfekte Leben haben,welches absolut erstrebenswert ist. Die vermitteltden Ideale wie
                                Schönheit, Geld und Reichtum sind bei weitem nicht die wichtigsten Aspekte eines zufriedenen Lebens.
                            </p>
                            <div className="icon-wrapper-big">
                                <p className="info-box">Problem 3: Die Contentblase</p>
                            </div>
                            <p className="slim-text">
                                Ist man einem Influencer und seinen Inhalten vollkommen verflogen, so besteht das Risiko in einer Informationsblase zu landen, in der nur noch die Informationen
                                beim User ankommen, die er auch hören soll. Es wird zunehmend schwieriger Menschen, die viel Zeit auf den sozialen Medien unterwegs sind von
                                unterschiedlichen Meinungen zu überzeugen. Der Influencer nimmt hier eine Art Machtrolle ein, die viel mehr Einfluss auf Fans haben kann als vorerst
                                scheint.
                            </p>
                        </div>
                        <Button className="helper-btn cta" onClick={() => window.location.href="/empfehlungen"}>Hier gibt's Tipps</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Influencers;
