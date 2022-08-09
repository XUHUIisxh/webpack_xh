import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Home from './pages/home.jsx'
import About from './pages/about.jsx'


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
                <BrowserRouter>
                    <Link to="/home">首页</Link>
                    <Link to="/about">关于</Link>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}


export default App