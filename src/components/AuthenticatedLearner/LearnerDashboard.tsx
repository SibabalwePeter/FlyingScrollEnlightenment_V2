
import Avatar from '@material-ui/core/Avatar';
import * as React from 'react';
import { Collapse, Container } from 'reactstrap';

const LearnerDashboard =()=> {

        return (
            <Container>
                <div>
                    <h2>Dashboard</h2>
                    <br/>
                    <div className="sideBar col-2 float-left text-white">
                        <table className="table table-dark table-hover">
                            <tr>
                                <th className="align-middle">
                                    <Avatar alt="Remy Sharp" src='../Pictures/Animals.jpeg'/>
                                    Sibabalwe Peter
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <a>Dashboard</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a> Profile</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Assessment
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="ml-3">
                        <h6>Dashboard Landing Page</h6>
                        <div id="content">
                        
                        </div>
                    </div>
                </div>
            </Container>
        )
}

    export default LearnerDashboard;