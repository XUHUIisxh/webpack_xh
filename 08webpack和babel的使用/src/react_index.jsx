import React, { Component } from "react";
import ReactDom from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>hello react</h1>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))