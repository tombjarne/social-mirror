import React from "react";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheckInput from "react-bootstrap/FormCheckInput";

class Generic extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
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
            </section>
        );
    }
}

export default Generic;
