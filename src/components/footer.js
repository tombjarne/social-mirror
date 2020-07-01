import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {

    render() {

        return (
            <div id="footer-wrapper">
                <Navbar id="footer-nav" bg="light" expand="xl" collapseOnSelect>
                    <div id="pages">
                        <span onClick={() => this.navigate('home')}>Home</span>
                        <span onClick={() => this.navigate('mirror')}>Analysis</span>
                        <span onClick={() => this.navigate('faq')}>FAQ</span>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Footer;