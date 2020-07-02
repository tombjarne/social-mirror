import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "../assets/img/logo.png";
import TextLogo from "../assets/img/type_logo.png";


//globals

var instaLink = "https://instagram.com/";
var webdriver = require("selenium-webdriver"),
    SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;
var caps = {
    name: 'Instagram',
    build: '1.0',
    version: '70',
    platform: 'Windows 10',
    screen_resolution: '1366x768',
    browserName: 'Chrome',
}

//functions

async function sendRequest() {
    try {
        var driver = new webdriver.Builder()
            .usingServer(instaLink)
            .withCapabilities(caps)
            .build()

        await driver.get(instaLink);

        await driver.getTitle().then(function (title) {
            console.log(title);
        });

        await driver.quit();
    } catch(err) {
        handleFailure(err,driver);
    }
}

function handleFailure(err,driver) {
    console.error(err.stack);
    driver.quit();
}

class Navigation extends React.Component {

    constructor(props) {
        super (props);

        this.state = {
            expanded: false,
            userName: '',
            submitRequest: false
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    navigate( view ) {
        const { history } = this.props
        view && history.push( view )
    }

    toggleNavbar() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    updateRequestStatus() {
        this.state.submitRequest == true;
        fetchInstagramUser(this.state.userName);
    }

    fetchInstagramUser(input){
        this.state.userName = input;
        if(this.state.submitRequest == true) {
            let userName = input;
            let requestLink = instaLink.concat(input);

            console.log(userName);
            console.log(requestLink);

            sendRequest();
        }
    }

    render() {

        return (
            <div id="nav-wrapper">
                <Navbar id="nav" bg="light" expand="xl" collapseOnSelect>
                    <Navbar.Toggle onClick={this.toggleNavbar} id="nav-button">
                        <div id="menu-icon-wrapper">
                            <div className="menu-icon"></div>
                            <div className="menu-icon"></div>
                            <div className="menu-icon"></div>
                        </div>
                    </Navbar.Toggle>
                    <Form inline>
                        <InputGroup>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={evt => this.fetchInstagramUser(evt)}
                            />
                            <Button type="submit" >Submit</Button>
                        </InputGroup>
                    </Form>
                    <Navbar.Brand href="./">
                        <img
                            id="logo"
                            src={Logo}
                            className = "logo-icon"
                            onClick={() => this.navigate('home')}
                        />
                        <img
                            id="logo"
                            src={TextLogo}
                            className = "text-logo"
                            onClick={() => this.navigate('home')}
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                this.state.expanded == true &&
                                (
                                    <article id="menu-wrapper">
                                        <div id="pages">
                                            <span className="page-links" onClick={() => this.navigate('home')}>Home</span>
                                            <span className="page-links" onClick={() => this.navigate('mirror')}>Analysis</span>
                                            <span className="page-links" onClick={() => this.navigate('faq')}>FAQ</span>
                                        </div>
                                    </article>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;