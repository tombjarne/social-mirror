import React from "react";

import Pagination from "react-bootstrap/Pagination";
import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import youtube from "../../assets/img/yt_icon_rgb.png";
import tiktok from "../../assets/img/tiktok-logo.png";
import reddit from "../../assets/img/reddit.png";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";

class Test extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            e1: false,
            e2: false,
            e3: false,
            e4: false,
            e5: false,
            e6: false,
            e7: false,
            e8: false,
            e9: false,
            e10: false,
            e11: false,
            e12: false,
            e14: false,
            e15: false,
            e16: false,
            e17: false,
            e18: false,
            e19: false,
            e20: false,
            e21: false,
            e22: false,
            e23: false,
            e24: false,
            e25: false,
            e26: false,
            e27: false,
            e28: false,
            e29: false,
        }

        const generic =
            <section className="question-container">
                <h2>Frage 1:</h2>
                <p className="slim-text centered">Hast du schon einmal ein Produkt eines Influencers gekauft?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(1,1)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,1)} >Ja, einmal</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,1)} >Ja, mehrmals</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic2 =
            <section className="question-container">
                <h2>Frage 2:</h2>
                <p className="slim-text centered">Hast du schon einmal einen Influencer getroffen?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(1,2)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,2)} >Ja</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic3 =
            <section className="question-container">
                <h2>Frage 3:</h2>
                <p className="slim-text centered">Verfolgst du Influencer auf Social Media?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(1,3)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,3)} >Ja, wenigen</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,3)} >Ja, mehreren</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic4 =
            <section className="question-container">
                <h2>Frage 4:</h2>
                <p className="slim-text centered">Würdest du gerne einmal einen Influencer treffen?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(1,4)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,4)} >Ja</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic5 =
            <section className="question-container">
                <h2>Frage 5:</h2>
                <p className="slim-text centered">Wie viel Zeit verbringst du damit das Leben eines Influencers auf
                    Social Media zu verfolgen? (1 wenig, 10 sehr viel)</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1,5)} >1</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,5)} >2</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,5)} >3</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,5)} >4</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,5)} >5</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,5)} >6</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,5)} >7</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,5)} >8</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,5)} >9</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,5)} >10</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic6 =
            <section className="question-container">
                <h2>Frage 6:</h2>
                <p className="slim-text centered">Statement: Mir ist es wichtig, oft online zu sein, um jederzeit up to date zu sein.</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(1,6)} >Stimme nicht zu</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,6)} >Stimme eher zu</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,6)} >Stimme zu</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic7 =
            <section className="question-container">
                <h2>Frage 7:</h2>
                <p className="slim-text centered">Siehst du dir lieber Reaction Videos, oder die Videos selbst an?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(1,7)} >Ich weiß nicht was das ist</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,7)} >Reaction Videos</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,7)} >Selbst ansehen</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic8 =
            <section className="question-container">
                <h2>Frage 8:</h2>
                <p className="slim-text centered">Wofür nutzt du die sozialen Medien?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(100,8)} >Um mit Freunden in Kontakt zu bleiben</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,8)} >Um aktuelle Nachrichten zu verfolgen</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,8)} >Entertainment auf YouTube/Instagram</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1,8)} >Networking/Berufliche Zwecke</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic9 =
            <section className="question-container">
                <h2>Frage 9:</h2>
                <p className="slim-text centered">Welche sozialen Medien nutzt du?</p>
                <div className="answer-container">
                    <FormGroup className="cpl-answer">
                        <div className="image-container-wrapper">
                            <div className="image-container">
                                <div>
                                    <img alt="" className="image-icon" src={twitter}/>
                                </div>
                                <Button className="test-btn" onClick={() => this.setChosen(100,9)} >Twitter</Button>
                            </div>
                            <div className="image-container">
                                <div>
                                    <img alt="" className="image-icon" src={instagram}/>
                                </div>
                                <Button className="test-btn" onClick={() => this.setChosen(1000,9)} >Instagram</Button>
                            </div>
                            <div className="image-container">
                                <div>
                                    <img alt="" className="image-icon" src={youtube}/>
                                </div>
                                <Button className="test-btn" onClick={() => this.setChosen(10,9)} >YouTube</Button>
                            </div>
                        </div>
                        <div className="image-container-wrapper">
                            <div className="image-container">
                                <div>
                                    <img alt="" className="image-icon" src={facebook}/>
                                </div>
                                <Button className="test-btn" onClick={() => this.setChosen(10,9)} >Facebook</Button>
                            </div>
                            <div className="image-container">
                                <div>
                                    <img alt="" className="image-icon" src={tiktok}/>
                                </div>
                                <Button className="test-btn" onClick={() => this.setChosen(1000,9)} >TikTok</Button>
                            </div>
                            <div className="image-container">
                                <div>
                                    <img alt="" className="image-icon" src={reddit}/>
                                </div>
                                <Button className="test-btn" onClick={() => this.setChosen(100,9)} >Reddit</Button>
                            </div>
                        </div>
                    </FormGroup>
                </div>
            </section>;

        const generic10 =
            <section className="question-container">
                <h2>Frage 10:</h2>
                <p className="slim-text centered">Welche dieser Influencer / Creators verfolgst du?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Donald Trump</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,10)} >Elon Musk</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >BibisBeautyPalace</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,10)} >MrBeast</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,10)} >Film Riot</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Techlead</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >PewDiePie</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Roomie</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,10)} >Gronkh</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Knossi</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Leon Machere</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,10)} >Held der Steine</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Logan Paul</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Jake Paul</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,10)} >unge</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,10)} >Smosh</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,10)} >Marques Brownlee</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,10)} >Christiano Ronaldo</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,10)} >Justin Bieber</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,10)} >Barack Obama</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,10)} >Dude Perfect</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Drama Alert</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Shane Dawson</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,10)} >Ricegum</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,10)} >Smartereveryday</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,10)} >Rezo</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,10)} >Jazza</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic11 =
            <section className="question-container">
                <h2>Frage 11:</h2>
                <p className="slim-text centered">Wie häufig benutzt du das Internet? (1 wenig, 10 sehr viel)</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1,11)} >1</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,11)} >2</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,11)} >3</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,11)} >4</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,11)} >5</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,11)} >6</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,11)} >7</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,11)} >8</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,11)} >9</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,11)} >10</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic12 =
            <section className="question-container">
                <h2>Frage 12:</h2>
                <p className="slim-text centered">Hast du schon einmal Content auf YouTube oder einer anderen Plattform produziert?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(10,12)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,12)} >Nein, ich würde aber gerne</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,12)} >Ja, ab und zu</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1000,12)} >Ja, regelmäßig</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic13 =
            <section className="question-container">
                <h2>Frage 13:</h2>
                <p className="slim-text centered">Schätze dich selbst ein: Bist du abhängig von Social Media oder einem Influencer?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.setChosen(100,14)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10,14)} >Eher nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,14)} >Weiß nicht</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(100,14)} >Eher ja</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(10000,14)} >Ja</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic14 =
            <section className="question-container">
                <h2>Frage 14:</h2>
                <p className="slim-text centered">Wie wichtig ist es dir deine Lieblingsinfluencer zu verfolgen? (1 wenig, 10 sehr viel)</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1,11)} >1</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,11)} >2</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,11)} >3</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(10,11)} >4</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,11)} >5</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,11)} >6</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(100,11)} >7</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,11)} >8</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,11)} >9</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1000,11)} >10</Button>
                    </FormGroup>
                </div>
            </section>;

        this.state = {
            answer: 0, //no by default 1-> true
            chosen: [],
            highlighted: false,
            current: 1,
            score: 0,
            previousref: 0,
            previousval: 0,
            pages: [
                generic,
                generic2,
                generic3,
                generic4,
                generic5,
                generic6,
                generic7,
                generic8,
                generic9,
                generic10,
                generic11,
                generic12,
                generic13,
                generic14,
            ]
        };

    this.setChosen = this.setChosen.bind(this);
}


    setChosen(value, ref) {
        if(this.state.previousref === ref && ref < 9){

            this.setState({
                highlighted: true,
                score: this.state.score - this.state.previousval + value,
                previousref: ref,
                previousval: value
            });
            this.score = this.state.score;
        } else {
            this.setState({
                highlighted: true,
                score: this.state.score += value,
                previousref: ref,
                previousval: value
            });
            this.score = this.state.score;
        }
    }

    navigate(current){
        if(current <= 14){
            let next = current;

            this.setState({
                current: next,
                highlighted: !this.state.highlighted,
            });

            console.log(this.state.score);
        } else {
            this.setState({
                score: this.state.score,
                current: 15,
            });
        }
    }

    render() {

        let items = [];

        for (let number = 1; number <= 14; number++) {
            if(number <= this.state.current) {
                items.push(
                    <Pagination.Item
                        page-active
                        key={number}
                        active={number <= this.state.current}
                        onClick={() => this.navigate(number)}
                    >
                        ●
                    </Pagination.Item>,
                );
            } else {
                items.push(
                    <Pagination.Item
                        key={number}
                        active={number <= this.state.current}
                        onClick={() => this.navigate(number)}
                    >
                        ∘
                    </Pagination.Item>,
                );
            }
        }

        return (
            <div id="reg-page" className="claim-actions double-feature test-page">
                <h1 className="big-title">Teste dich</h1>
                <div id="test" className="wrapper">
                    <div id="page-wrapper">
                        {
                            this.state.current < 15 &&
                            (
                                <div className="pagination-wrapper">
                                    <p>Frage {this.state.current}/14</p>
                                    <Pagination>{items}</Pagination>
                                </div>
                            )
                        }
                    </div>
                    <div className="question">
                        {this.state.pages[this.state.current -1]}
                        {
                            this.state.current === 15 && this.state.score > 10 &&
                            (
                                <div>
                                    <section className="question-container">
                                        <h2>Auswertung:</h2>
                                        {
                                            this.state.score < 1251 &&
                                            (
                                                <div id="harmlos">
                                                    <h2>Harmlos</h2>
                                                    <p className="txt-highlight">{this.score / 100} Punkte</p>
                                                    <div>
                                                        <h2 className="centered">Was bedeutet dieses Ergebnis?</h2>
                                                        <ul className="slim-list">
                                                            <li>Du verbringst wenig Zeit auf Social Media</li>
                                                            <li>Du folgst hauptsächlich Personen, die du kennst</li>
                                                            <li>Du bist zum chatten und vernetzen auf Social Media</li>
                                                        </ul>
                                                    </div>
                                                    <h2>Hol dir deine Belohnung!</h2>
                                                    <p>Registriere dich kostenfrei und unverbindlich bei unserem Monitoring Programm und erhalte deine kostenlose
                                                        Prämie!.</p>
                                                    <div className="spacing"></div>
                                                    <Button className="helper-btn agree-btn" onClick={() => window.location.href="/profil"}>Belohnung abholen!</Button>
                                                    <div className="spacing"></div>
                                                </div>
                                            )
                                        }
                                        {
                                            this.state.score > 1250 && this.state.score < 4001 &&
                                            (
                                                <div id="bedenklich">
                                                    <h2>Bedenklich</h2>
                                                    <p className="txt-highlight">{-this.score / 100} Punkte</p>
                                                    <div>
                                                        <h2 className="centered">Was bedeutet dieses Ergebnis?</h2>
                                                        <ul className="slim-list">
                                                            <li>Du verbringst tendenziell mehr Zeit auf Social Media</li>
                                                            <li>Du folgst einigen Personen mit schlechtem Einfluss</li>
                                                            <li>Du bist aus Langeweile auf Social Media</li>
                                                        </ul>
                                                    </div>
                                                    <h2>Bereit etwas zu verändern?</h2>
                                                    <p>Registriere dich kostenfrei und unverbindlich bei unserem Monitoring Programm.</p>
                                                    <h4>Wie profitierst du davon?</h4>
                                                    <p>Für deine Fortschritte weniger Zeit auf Social Media zu verbringen gibt's satte Belohnungen und Preise für dich!</p>
                                                    <div className="spacing"></div>
                                                    <Button className="helper-btn agree-btn" onClick={() => window.location.href="/profil"}>Probier's aus!</Button>
                                                    <div className="spacing"></div>
                                                </div>
                                            )
                                        }
                                        {
                                            this.state.score > 4000 &&
                                            (
                                                <div id="danger">
                                                    <h2>Potenziell gefährdet</h2>
                                                    <p className="txt-highlight">{-this.score / 100} Punkte</p>
                                                    <div>
                                                        <h2 className="centered">Was bedeutet dieses Ergebnis?</h2>
                                                        <ul className="slim-list">
                                                            <li>Du verbringst viel Zeit auf Social Media</li>
                                                            <li>Du folgst Personen mit schlechtem Einfluss</li>
                                                            <li>Du benutzt die sozialen Medien exzessiv</li>
                                                            <li>Du bist aus Langeweile auf Social Media</li>
                                                        </ul>
                                                    </div>
                                                    <h2>Bereit etwas zu verändern?</h2>
                                                    <p>Registriere dich kostenfrei und unverbindlich bei unserem Monitoring Programm.</p>
                                                    <h4>Wie profitierst du davon?</h4>
                                                    <p>Für deine Fortschritte weniger Zeit auf Social Media zu verbringen gibt's satte Belohnungen und Preise für dich!</p>
                                                    <div className="spacing"></div>
                                                    <Button className="helper-btn agree-btn" onClick={() => window.location.href="/profil"}>Probier's aus!</Button>
                                                    <div className="spacing"></div>
                                                </div>
                                            )
                                        }
                                    </section>
                                </div>
                            )
                        }
                        {
                            this.state.current === 15 && this.state.score < 10 &&
                            (
                                <div>
                                    <section className="question-container">
                                        <h2>Halt!</h2>
                                        <div>
                                            <h3>Warum hast du kein Ergebnis?</h3>
                                            <p>Bitte schließe das Quiz ordentlich ab und beantworte jede Frage</p>
                                        </div>
                                    </section>
                                </div>
                            )
                        }
                    </div>
                    {
                        this.state.current < 15 &&
                        (
                            <div>
                                <Button className={`test-btn btn${this.state.highlighted === false ? "" : "-highlighted"}`} onClick={() => this.navigate(this.state.current +1)} >Weiter</Button>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Test;
