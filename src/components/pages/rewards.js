import React from "react";

import code from "../../assets/img/code.png";
import Button from "react-bootstrap/Button";

class Rewards extends React.Component {

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
                <div id="hero-alternative-reward">
                    <div id="hero-cta">
                        <div>
                            <h1 className="white-text">Dein Reward!</h1>
                            <div className="spacing"></div>
                            <div className="button-wrapper-vert">
                                <span className="txt-highlight red">1 x Stadtrundfahrt!</span>
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
                                <span className="txt-highlight red">1 x Stadtrundfahrt!</span>
                                <div className="spacing"></div>
                                <Button className="helper-btn agree-btn" onClick={() => window.location.href="/rewards"}>Jetzt Gutschein abholen!</Button>
                                <p className="slim-text centered">Der Gutschein ist gültig vom 01.07.2020 bis zum 31.07.2020. Beeil dich beim Einlösen deines Codes!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Rewards;
