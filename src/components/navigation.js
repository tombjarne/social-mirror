import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/img/logo.png";
import TextLogo from "../assets/img/type_logo.png";

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

    toggleNavbar() {
        this.setState({
            expanded: !this.state.expanded
        });
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
                    <Navbar.Brand href="/">
                        <img
                            id="logo"
                            src={Logo}
                            className = "logo-icon"
                        />
                        <img
                            id="logo"
                            src={TextLogo}
                            className = "text-logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                this.state.expanded == true &&
                                (
                                    <article id="menu-wrapper">
                                        <div id="pages">
                                            <span className="page-links" onClick={() => window.location.href='/'}>Home</span>
                                            <span className="page-links" onClick={() => window.location.href='/test'}>Test</span>
                                            <span className="page-links" onClick={() => window.location.href='/wissen'}>Wissen</span>
                                            <span className="page-links" onClick={() => window.location.href='/empfehlungen'}>Empfehlungen</span>
                                            <span className="page-links" onClick={() => window.location.href='/profil'}>Profil</span>
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
