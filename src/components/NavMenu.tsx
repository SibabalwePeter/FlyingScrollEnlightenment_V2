import * as React from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Styles/NavMenu.css';
import logo2 from '../Pictures/Logo .png'
import AuthBtton from './AothButton';
import { useAuth0 } from "@auth0/auth0-react";
/* <img src={logo} alt='Logo' style={{width: 151, height: 76 }}/> <h3><strong>Flying Scroll Enlightenment</strong></h3>*/

/*export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {*/

const NavMenu = () => {
    const { isAuthenticated } = useAuth0();
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
                    <Container>
                    <img src={logo2} alt='Logo' style={{width: 241, height: 121 }}/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
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
                                {isAuthenticated?
                                < NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/LearnerDashBoard">Dashboard</NavLink>
                                </NavItem>: ""}
                                <NavItem><AuthBtton /></NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    export default NavMenu;