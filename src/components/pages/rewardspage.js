import React from "react";

class Rewardspage extends React.Component {

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
                <div id="hero-alternative-reward-1">
                    <div id="hero-cta">
                        <div>
                            <h1 className="white-text">Deine Rewards</h1>
                            <div className="spacing"></div>
                            <div className="button-wrapper-vert">
                                <span className="txt-highlight good" onClick={() => window.location.href="rewards/1001"}>1 x Stadtrundfahrt</span>
                                <div className="spacing-slim"></div>
                                <span className="txt-highlight good" onClick={() => window.location.href="rewards/1000"}>1 x Geführte Wanderung</span>
                                <div className="spacing-slim"></div>
                                <span className="txt-highlight expired">1 x Geführte Wanderung</span>
                                <div className="spacing-slim"></div>
                                <span className="txt-highlight expired">1 x Geführte Wanderung</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Rewardspage;
