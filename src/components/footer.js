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
                        <span className="page-links" onClick={() => window.location.href='/test'}>Test</span>
                        <span className="page-links" onClick={() => window.location.href='/wissen'}>Wissen</span>
                        <span className="page-links" onClick={() => window.location.href='/empfehlungen'}>Empfehlungen</span>
                        <span className="page-links" onClick={() => window.location.href='/profil'}>Profil</span>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
