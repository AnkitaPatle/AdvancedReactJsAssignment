import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, 
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">VEHICLE SERVICING</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/home"><NavLink>HOME</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/aboutus"><NavLink>ABOUT US</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/pricing"><NavLink>PRICING</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/ouroffers"><NavLink>OUR OFFERS</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contactus"><NavLink>CONTACT US</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/booknow"><NavLink>BOOK NOW</NavLink></Link>
                            </NavItem>
                            <Link to="/login"><Button outline color="warning">LOGIN</Button></Link>&nbsp;
                            <Link to="/signup"><Button outline color="warning">SIGN UP</Button></Link>
                        </Nav>
                    </Collapse>
                </Navbar>
                
            </div>
        )
    }
}

export default HeaderComponent;
