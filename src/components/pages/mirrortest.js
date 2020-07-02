import React from "react";

import Progress from "progress";
import Generic from "./questions/generic";
import Pagination from "react-bootstrap/Pagination";

class Test extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 1,
            pages: [
                <Generic />,
            ]
        };
    }

    navigate(current){
        let next = current;

        this.setState({
            current: next,
        });
    }

    render() {

        let items = [];

        for (let number = 1; number <= 10; number++) {
            if(number <= this.state.current) {
                items.push(
                    <Pagination.Item
                        page-active
                        key={number}
                        active={number <= this.state.current}
                        onClick={() => this.navigate(number)}
                    >
                        ●
                    </Pagination.Item>,
                );
            } else {
                items.push(
                    <Pagination.Item
                        key={number}
                        active={number <= this.state.current}
                        onClick={() => this.navigate(number)}
                    >
                        ∘
                    </Pagination.Item>,
                );
            }
        }

        return (
            <div id="reg-page" className="claim-actions double-feature">
                <h1 className="big-title">Take the test</h1>
                <div id="test" className="wrapper">
                    <div id="page-wrapper">
                        <p>Question {this.state.current}/10</p>
                        <Pagination>{items}</Pagination>
                    </div>
                    <div>
                        {this.state.pages[this.state.current -1]}
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;
