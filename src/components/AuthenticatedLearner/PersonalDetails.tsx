import * as React from 'react';
import { Container } from 'reactstrap';

class PersonalDetails extends React.PureComponent {
    public render() {
        return (
            <Container>
                <div>
                    <form >
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Provide email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Your password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label ml-3" htmlFor="exampleCheck1">Remember me</label>
                        </div >
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Container>
        );
    }
};

export default PersonalDetails;