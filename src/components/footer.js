import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {

    render() {

        return (
            <div id="footer-wrapper">
                <Navbar id="footer-nav" bg="light" expand="xl" collapseOnSelect>
                    <div id="pages">
                        <span className="page-links" onClick={() => window.location.href='/'}>Home</span>
                        <span className="page-links" onClick={() => window.location.href='analysis'}>Test</span>
                        <span className="page-links" onClick={() => window.location.href='knowledge'}>Wissen</span>
                        <span className="page-links" onClick={() => window.location.href='knowledge'}>Monitoring</span>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
