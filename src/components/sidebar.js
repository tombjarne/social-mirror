import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "../assets/img/logo.png";

class Sidebar extends React.Component {

    constructor(props) {
        super (props);

        this.state = {
            expanded: false,
            isSidebarVisible: true
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.setState({
            expanded: !this.state.expanded,
            isSidebarVisible: !this.state.isSidebarVisible
        });
    }

    render() {
        const {isSidebarVisible} = this.state;

        return (
            <div id={`sidebar-responsive-wrapper${isSidebarVisible ? "" : "-extended"}`}
                 onClick={this.toggleSidebar}
            >
                <Navbar id="sidebar-nav" bg="light" expand="xl" collapseOnSelect>
                    <img
                        id="sidebar-toggle"
                        src={Logo}
                        className = "toggle-icon"
                    />
                    <div>
                        {
                            this.state.expanded == true &&
                            (
                                <article id="sidebar">
                                    <div id="pages">
                                        <h1>Ready to learn more?</h1>
                                        <div className="sidebar-feature bright">
                                            <h4>Hot topics</h4>
                                        </div>
                                        <div className="sidebar-feature bright">
                                            <h4>Statistics</h4>
                                        </div>
                                        <div className="sidebar-feature bright">
                                            <h4>E-Privacy</h4>
                                        </div>
                                    </div>
                                    <Form inline>
                                        <InputGroup>
                                            <h1>Quicksearch</h1>
                                            <FormControl
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                            <Button type="submit" >Submit</Button>
                                        </InputGroup>
                                    </Form>
                                </article>
                            )
                        }
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Sidebar;
