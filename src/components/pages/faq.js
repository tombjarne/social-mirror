import React from "react";
import ReactPlayer from "react-player";
import user from "../../assets/img/user-alt-solid.svg";
import money from "../../assets/img/money-check-alt-solid.svg";
import influencer from "../../assets/img/users-solid.svg";
import Sidebar from "../sidebar";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

class Knowledge extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: "Default"
        };
    }

    render() {

        function renderTooltip(props, section) {

            function changeContent(section) {
                this.changeContent = function (section) {
                    let content = "";

                    if(section == "general"){
                        content = "General - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean";
                    }
                    if(section == "money"){
                        content = "Money - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean";
                    }
                    if(section == "influencers"){
                        content = "Influencers - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean";
                    }
                    return content;
                }
            }

            //const toolTip = changeContent(section);

            return (
                <Tooltip id="button-tooltip" {...props}>
                    <h4>Information</h4>
                    <p>Influencers - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean</p>
                </Tooltip>
            );
        }

        return (
            <div id="reg-page" className="claim-actions double-feature">
                <Sidebar />
                <h1 className="big-title">Frequently asked questions</h1>
                <div className="wrapper">
                    <h2>Browse available information</h2>
                    <div className="icon-container light-bg">
                        <div className="icon-wrapper">
                            <OverlayTrigger
                                overlay={renderTooltip}
                                placement="bottom"
                            >
                                <div href="#general">
                                    <img
                                        id="small-img" className="icon" alt="" src={user}
                                    />
                                </div>
                            </OverlayTrigger>
                            <p>General</p>
                        </div>
                        <div className="icon-wrapper">
                            <OverlayTrigger
                                overlay={renderTooltip}
                                placement="bottom"
                            >
                                <div>
                                    <img
                                        className="icon" alt="" src={money}
                                        href="monetezation"
                                    />
                                </div>
                            </OverlayTrigger>
                            <p>Monetezation</p>
                        </div>
                        <div className="icon-wrapper">
                            <OverlayTrigger
                                overlay={renderTooltip}
                                placement="bottom"
                            >
                                <div>
                                    <img
                                        className="icon" alt="" src={influencer}
                                        href="influencers"
                                    />
                                </div>
                            </OverlayTrigger>
                            <p>Influencers</p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <h2 id="general">General</h2>
                        <p className="slim-text">
                            Volunteer is a tool that connects volunteers with people who need
                            help with getting food, medication and similar tasks. Click on
                            whether you want to help or be helped
                        </p>
                        <div className="claim-actions">
                            <div className="play">
                                <ReactPlayer id="video-player" url="https://www.youtube-nocookie.com/embed/ogja5YT7Wfc" />
                            </div>
                        </div>
                        <p className="slim-text">
                            Volunteer is a tool that connects volunteers with people who need
                            help with getting food, medication and similar tasks. Click on
                            whether you want to help or be helped
                        </p>
                    </div>
                </div>
                <div id="claim">
                    <div className="wrapper">
                        <h2>Monetezation</h2>
                        <p className="slim-text">
                            Volunteer is a tool that connects volunteers with people who need
                            help with getting food, medication and similar tasks. Click on
                            whether you want to help or be helped
                        </p>
                    </div>
                </div>
                <div className="wrapper">
                    <h2>Influencers</h2>
                    <p className="slim-text">
                        Volunteer is a tool that connects volunteers with people who need
                        help with getting food, medication and similar tasks. Click on
                        whether you want to help or be helped
                    </p>
                </div>
            </div>
        );
    }
}

export default Knowledge;
