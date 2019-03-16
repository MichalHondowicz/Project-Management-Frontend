import React, {Component} from 'react';
import projectItem from "./project/projectItem";
import createProjectButton from "./project/createProjectButton";

class dashboard extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br/>
                            <createProjectButton/>
                            <br/>
                            <hr/>
                            <projectItem/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default dashboard;