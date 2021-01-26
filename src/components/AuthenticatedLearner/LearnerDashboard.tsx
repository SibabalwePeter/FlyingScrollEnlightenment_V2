
import Avatar from '@material-ui/core/Avatar';
import * as React from 'react';
import { Col, Collapse, Container } from 'reactstrap';
import PersonalDetails from './PersonalDetails';
import AssessmentStepper from './Assessment'

const LearnerDashboard =()=> {

    return (
        <Container>
            <div>
                <h2>Dashboard</h2>
                <div className="float-left col-3 bg-dark">
                    <ul className="nav list-group list-group-vertical">
                        <li className="active"><a href="#dashboard" data-toggle="tab">Dashboard</a></li>
                        <li><a className="" href="#personalDetails" data-toggle="tab">Personal Details</a></li>
                        <li><a href="#assessment" data-toggle="tab">Assessment</a></li>
                    </ul>
                </div>
                <div className="tab-content float-right col-9">
                    <div id="dashboard" className="tab-pane fade in active"><h5>Menu 1</h5></div>
                    <div id="personalDetails" className="tab-pane fade"><PersonalDetails/></div>
                    <div id="assessment" className="tab-pane fade"><AssessmentStepper/></div>
                </div>
            </div>
        </Container>
    )
}

export default LearnerDashboard;