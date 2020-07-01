import React from "react";

import Button from "react-bootstrap/Button";

import influencer from "../../assets/img/users-solid.svg";
import user from "../../assets/img/user-alt-solid.svg";
import money from "../../assets/img/money-check-alt-solid.svg";

class Home extends React.Component {

    render() {
        return (
            <section id="home">
                <div id="hero">
                    <div id="hero-cta">
                        <h1>Ready to test yourself?</h1>
                        <p>Test your social behaviour and find out how dependent you are on social media.</p>
                        <Button href="#claim" className="helper-btn">Test now</Button>
                    </div>
                </div>
                <div id="demo">
                    <div className="claim-overlay"></div>
                    <div className="wrapper">
                        <h2>Try the Social Mirror</h2>
                        <div className="icon-container">
                            <div className="icon-wrapper">
                                <div>
                                    <img id="small-img" className="icon" alt="" src={user} />
                                </div>
                                <p>Users</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={money} />
                                </div>
                                <p>Money</p>
                            </div>
                            <div className="icon-wrapper">
                                <div>
                                    <img className="icon" alt="" src={influencer} />
                                </div>
                                <p>Influencers</p>
                            </div>
                        </div>
                        <p className="slim-text centered">
                            <b className="highlight">Social Mirror helps you identify your social media life.</b>
                        </p>
                        <p className="slim-text centered">
                            We help you understand how Influencers work,
                            how they advertise and how users can depend on it.
                        </p>
                        <Button href="#claim" className="helper-btn-small cta">Test now</Button>
                    </div>
                </div>
                <div id="info">
                    <div className="wrapper">
                        <h2>Additional features</h2>
                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">FAQ</p>
                            </div>
                            <p>
                                We help you understand how Influencers work,
                                how they advertise and how users can depend on it.
                            </p>
                        </div>
                        <Button href="#claim" className="helper-btn cta">Test now</Button>

                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">Influencer Analysis</p>
                            </div>
                            <p>
                                We help you understand how Influencers work,
                                how they advertise and how users can depend on it.
                            </p>
                        </div>
                        <Button href="#claim" className="helper-btn cta">Test now</Button>

                        <div className="icon-container-alternativ">
                            <div className="icon-wrapper-big">
                                <p className="info-box">User Analysis</p>
                            </div>
                            <p>
                                We help you understand how Influencers work,
                                how they advertise and how users can depend on it.
                            </p>
                        </div>
                        <Button href="#claim" className="helper-btn cta">Test now</Button>

                    </div>
                </div>
            </section>
        );
    }
}

export default Home;