import React from "react";

class Coupons extends React.Component {

    render() {
        return (
            <section id="home">
                <div id="hero">
                    <div id="hero-cta">
                        <div>
                            <h1 className="white-text">Deine Gutscheine</h1>
                            <div className="spacing"></div>
                            <div className="button-wrapper-vert">
                                <span className="txt-highlight good">20% Rabatt auf Sportkleidung</span>
                                <div className="spacing-slim"></div>
                                <span className="txt-highlight good">15% Rabatt auf Lautsprecher</span>
                                <div className="spacing-slim"></div>
                                <span className="txt-highlight good">Ein Paar Kopfhörer geschenkt</span>
                                <div className="spacing-slim"></div>
                                <span className="txt-highlight good">5€ Gutschein SportScheck</span>
                                <div className="spacing-slim"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Coupons;
