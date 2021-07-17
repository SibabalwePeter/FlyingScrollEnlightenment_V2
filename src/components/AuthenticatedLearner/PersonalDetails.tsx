import * as React from 'react';
import { Container } from 'reactstrap';

class PersonalDetails extends React.PureComponent {
    public render() {
        return (
            <Container>
                <div>
                    <form>
                        <div className="form-row mb-3">
                            <div className="form-group col-md-4">
                                <label htmlFor="name">Name</label>
                                <input type="email" className="form-control" id="name" placeholder="Name"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="mName">Middle Name</label>
                                <input type="text" className="form-control" id="mName" placeholder="Middle Name"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="surname">Surname</label>
                                <input type="email" className="form-control" id="surname" placeholder="Surname"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="id">ID Number</label>
                                <input type="email" className="form-control" id="id" placeholder="ID Number"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" placeholder="31/12/1999"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="cellNumber">Cellphone Number</label>
                                <input type="text" className="form-control" id="cellNumber" placeholder="e.g 078 5555 555"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" placeholder="e.g East London" />
                            </div>
                            <div className="form-group col-md-4">
                            <label htmlFor="inputState">Province</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>Eastern Cape</option>
                            </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Psotal Code</label>
                                <input type="text" className="form-control" id="inputZip"/>
                            </div>
                        </div>

                        <hr className="border border-5px mt-4 mb-4"/>

                        <div className="form-row mb-3">
                            <div className="form-group col-md-4">
                                <label htmlFor="schoolName">School Name</label>
                                <input type="text" className="form-control" id="schoolName" placeholder="school Name"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="schoolEmail">School Email</label>
                                <input type="schoolEmail" className="form-control" id="schoolEmail" placeholder="e.g abc@abc.com"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="schoolPhoneNumber">Phone Number</label>
                                <input type="email" className="form-control" id="schoolPhoneNumber" placeholder="e.g 078 5555 555"/>
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="form-group col-md-6">
                                <label htmlFor="streetAddress1">Streer Address 1</label>
                                <input type="email" className="form-control" id="streetAddress1" placeholder="Street Address 1"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" placeholder="e.g East London"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Province</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>Eastern Cape</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Psotal Code</label>
                                <input type="text" className="form-control" id="inputZip"/>
                            </div>
                        </div>

                        <hr className="border border-5px mt-4 mb-4"/>

                        <div className="form-row" >
                            <div className="form-group col-md-6">
                                <label htmlFor="grade">Grade</label>
                                <input type="text" className="form-control" id="grade" placeholder="Grade"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Major 1</label>
                                <input type="text" className="form-control" id="major1" placeholder="Major 1"/>
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="form-group col-md-4">
                                <label htmlFor="major2">Major2</label>
                                <input type="text" className="form-control" id="major2" placeholder="Major 2"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="major3">Major 3</label>
                                <input type="text" className="form-control" id="major3" placeholder="Major 3"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="major4">Major 4</label>
                                <input type="text" className="form-control" id="major4" placeholder="Major 4"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Update
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </Container>
        );
    }
};

export default PersonalDetails;