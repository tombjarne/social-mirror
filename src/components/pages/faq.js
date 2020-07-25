import React from "react";
import ReactPlayer from "react-player";

import Button from "react-bootstrap/Button";

class Knowledge extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: "Default"
        };
    }

    render() {
        return (
            <div id="reg-page" className="claim-actions double-feature">
                {/*<Sidebar />*/}
                <h1 className="big-title">Wissen</h1>
                <div className="wrapper">
                    <p className="slim-text">
                        Erfahre alles, was es über Social Media zu erfahren gibt! Wir klären dich auf im Bereich der Influencer und Stars der sozialen Netzwerke
                        und geben dir hilfreiche Tipps mit!
                    </p>
                    <h2>Wähle eine Kategorie</h2>
                    <div className="button-wrapper-vert">
                        <Button href="/wissen/influencer" className="helper-btn">Influencer</Button>
                        <Button href="/wissen/social-media" className="helper-btn">Social Media</Button>
                    </div>
                    <div className="wrapper" id="danger">
                        <h2 id="influencer">Gefahren von Social Media</h2>
                        <p className="slim-text">
                            Die sozialen Medien sind weit mehr als nur eine Art der Kommunikation. Es kann dort wahrhaftig großartiges entstehen, jedoch gibt es auch eine
                            Kehrseite der Medallie. Viele Jugendliche haben bereits Erfahrungen mit Cyber Mobbing gesammelt oder unbeabsichtigt auf sensitive Inhalte
                            geklickt, da diese als harmlos getarnt waren...
                        </p>
                        <Button href="#video-player" className="helper-btn white" onClick={() => window.location.href="./wissen/gefahren"}>Mehr zu den Gefahren</Button>
                    </div>
                    <div className="wrapper">
                        <h2 id="influencer">Influencer</h2>
                        <div className="claim-actions">
                            <div className="play">
                                <ReactPlayer id="video-player" url="https://www.youtube-nocookie.com/embed/ogja5YT7Wfc" />
                            </div>
                        </div>
                        <p className="slim-text">
                            Influencer ist prinzipiell ein Beruf wie jeder andere. Influencer werden häufig von Agenturen oder Firmen beauftragt
                            ihre Produkte oder Marke zu repräsentieren. Für diese Leistungen erhalten die Influencer Geld...
                        </p>
                        <Button href="#video-player" className="helper-btn cta-a">Mehr erfahren</Button>
                        <h2 id="influencer">Social Media</h2>
                        <p className="slim-text">
                            Influencer ist prinzipiell ein Beruf wie jeder andere. Influencer werden häufig von Agenturen oder Firmen beauftragt
                            ihre Produkte oder Marke zu repräsentieren. Für diese Leistungen erhalten die Influencer Geld...
                        </p>
                        <Button href="#video-player" className="helper-btn cta-a">Mehr erfahren</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Knowledge;
