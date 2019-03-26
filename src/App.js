import React, {Component} from 'react';
import './App.css';
import dashboard from "./components/dashboard";
import Header from "./components/layout/header";
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import addProject from "./components/project/addProject";
import {Provider} from "react-redux";
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header/>
                        <Route exact path="/dashboard" component={dashboard}/>
                        <Route exact path="/addProject" component={addProject}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
