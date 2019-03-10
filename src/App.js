import React, {Component} from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Dashboard/>
            </div>
        );
    }
}

export default App;
