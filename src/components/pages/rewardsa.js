import React from "react";

import code from "../../assets/img/code.png";
import Button from "react-bootstrap/Button";

class Rewardsa extends React.Component {

    render() {
        return (
            <section id="home">
                <div id="rewardsa">
                    <div id="hero-cta">
                        <div>
                            <h1 className="white-text">Dein Reward!</h1>
                            <div className="spacing"></div>
                            <div className="button-wrapper-vert">
                                <span className="txt-highlight red">1 x Geführte Wanderung!</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="wrapper">
                        <div id="hero-cta">
                            <div className="profile-wrapper">
                                <h2>Glückwunsch! Genieße deinen Preis!</h2>
                                <img className="qr-code" src={code} />
                                <span className="txt-highlight red">1 x Geführte Wanderung!</span>
                                <div className="spacing"></div>
                                <Button className="helper-btn agree-btn" onClick={() => window.location.href="/rewards"}>Jetzt Reward abholen</Button>
                                <p className="slim-text centered">Der Gutschein ist gültig vom 01.08.2020 bis zum 31.10.2020. Beeil dich beim Einlösen deines Codes!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Rewardsa;
