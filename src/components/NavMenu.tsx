import * as React from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Styles/NavMenu.css';
import logo2 from '../Pictures/Logo .png'
/* <img src={logo} alt='Logo' style={{width: 151, height: 76 }}/> <h3><strong>Flying Scroll Enlightenment</strong></h3>*/
export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
                    <Container>
                    <img src={logo2} alt='Logo' style={{width: 241, height: 121 }}/>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} to="/" className="text-white">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/Practitioners">Practitioners</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/Learners">Learners</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/Services">Services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/AboutUs">About Us</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}