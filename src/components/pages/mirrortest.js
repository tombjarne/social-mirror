import React from "react";

import Progress from "progress";
import Generic from "./questions/generic";
import Generic1 from "./questions/generic1";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";

class Test extends React.Component {

    constructor(props) {
        super(props);

        const generic =
            <section className="question-container">
                <h2>Frage 1:</h2>
                <p className="slim-text centered">Hast du schon einmal ein Produkt eines Influencers gekauft?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1)} >Ja, einmal</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(2)} >Ja, mehrmals</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic2 =
            <section className="question-container">
                <h2>Frage 2:</h2>
                <p className="slim-text centered">Hast du schon einmal einen Influencer getroffen?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1)} >Ja</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic3 =
            <section className="question-container">
                <h2>Frage 3:</h2>
                <p className="slim-text centered">Verfolgst du Influencer auf Social Media?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1)} >Ja, wenigen</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1)} >Ja, mehreren</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic4 =
            <section className="question-container">
                <h2>Frage 4:</h2>
                <p className="slim-text centered">Würdest du gerne einmal einen Influencer treffen?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Nein</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1)} >Ja</Button>
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
                        <Button className="test-btn-scala" onClick={() => this.parent.setChosen(0)} >1</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1)} >2</Button>
                        <Button className="test-btn-scala" onClick={() => this.parent.setChosen(0)} >3</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1)} >4</Button>
                        <Button className="test-btn-scala" onClick={() => this.parent.setChosen(0)} >5</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1)} >6</Button>
                        <Button className="test-btn-scala" onClick={() => this.parent.setChosen(0)} >7</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1)} >8</Button>
                        <Button className="test-btn-scala" onClick={() => this.parent.setChosen(0)} >9</Button>
                        <Button className="test-btn-scala" onClick={() => this.setChosen(1)} >10</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic6 =
            <section className="question-container">
                <h2>Frage 6:</h2>
                <p className="slim-text centered">Statement: Mir ist es wichtig, oft online zu sein, um jederzeit up to date zu sein.</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Stimme nicht zu</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Stimme eher zu</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1)} >Stimme zu</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic7 =
            <section className="question-container">
                <h2>Frage 7:</h2>
                <p className="slim-text centered">Siehst du dir lieber Reaction Videos, oder die Videos selbst an?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Ich weiß nicht was das ist</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Reaction Videos</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1)} >Selbst ansehen</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic8 =
            <section className="question-container">
                <h2>Frage 8:</h2>
                <p className="slim-text centered">Wofür nutzt du die sozialen Medien?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Um mit Freunden in Kontakt zu bleiben</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Um aktuelle Nachrichten zu verfolgen</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Entertainment auf YouTube/Instagram</Button>
                        <Button className="test-btn" onClick={() => this.setChosen(1)} >Networking/Berufliche Zwecke</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic9 =
            <section className="question-container">
                <h2>Frage 9:</h2>
                <p className="slim-text centered">Wofür nutzt du die sozialen Medien?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Twitter</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Instagram</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >YouTube</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Facebook</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >TikTok</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Reddit</Button>
                    </FormGroup>
                </div>
            </section>;

        const generic10 =
            <section className="question-container">
                <h2>Frage 10:</h2>
                <p className="slim-text centered">Welche dieser Influencer verfolgst du?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Donald Trump</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Elon Musk</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >BibisBeautyPalace</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >MrBeast</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >PewDiePie</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Roomie</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Gronkh</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Knossi</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Logan Paul</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Jake Paul</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >unge</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Drama Alert</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Shane Dawson</Button>
                        <Button className="test-btn" onClick={() => this.parent.setChosen(0)} >Ricegum</Button>
                    </FormGroup>
                </div>
            </section>;

        this.state = {
            answer: 0, //no by default 1-> true
            chosen: [],
            highlighted: [
                false,
                false,
                false
            ],
            current: 1,
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
            ]
        };

    this.setChosen = this.setChosen.bind(this);
}

    setChosen(value) {
        this.state.answer = value;
        this.state.chosen[0] = this.state.answer;
        console.log(this.state.highlighted[value]);
        this.state.highlighted[value] = !this.state.highlighted[value]
        console.log(this.state.highlighted[value]);
    }

    navigate(current){
        let next = current;

        this.setState({
            current: next,
        });
    }

    render() {

        let items = [];

        for (let number = 1; number <= 10; number++) {
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
                        <p>Frage {this.state.current}/10</p>
                        <Pagination>{items}</Pagination>
                    </div>
                    <div className="question">
                        {this.state.pages[this.state.current -1]}
                    </div>
                    <div>
                        <Button className="test-btn" onClick={() => this.navigate(this.state.current +1)} >Weiter</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;
