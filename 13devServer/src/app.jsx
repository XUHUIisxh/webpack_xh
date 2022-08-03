import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "hello react"
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}


export default App