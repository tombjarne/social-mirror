import React from "react";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheckInput from "react-bootstrap/FormCheckInput";

class Generic extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            answer: 0, //no by default 1-> true
            chosen: [],
            highlighted: [
                false,
                false,
                false
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

    render() {
        return (
            <section className="question-container">
                <h2>Frage 1:</h2>
                <p className="slim-text centered">Hast du schon einmal ein Produkt eines Influencers gekauft?</p>
                <div className="answer-container">
                    <FormGroup>
                        <Button className={`test-btn btn${this.state.highlighted[0] === false ? "" : "-highlighted"}`} onClick={() => this.setChosen(0)} >Nein</Button>
                        <Button className={`test-btn btn${this.state.highlighted[1] === false ? "" : "-highlighted"}`} onClick={() => this.setChosen(1)} >Ja, einmal</Button>
                        <Button className={`test-btn btn${this.state.highlighted[2] === false ? "" : "-highlighted"}`} onClick={() => this.setChosen(2)} >Ja, mehrmals</Button>
                    </FormGroup>
                </div>
            </section>
        );
    }
}

export default Generic;