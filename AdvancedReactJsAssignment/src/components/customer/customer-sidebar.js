import React, { useState } from 'react'
import { NavItem, NavLink, Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu ,  Collapse, Button, CardBody, Card} from 'reactstrap';
import { Link } from 'react-router-dom';
import './customer.css';

const CustomerSidebarComponent = (props) => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
   const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  // const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="styledsidenav">
      <div className="">
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">
            <NavItem>
              <Link to="/"><NavLink>DASHBOARD</NavLink></Link>
            </NavItem>

            <NavItem>
              <Link to="/" onClick={toggle}><NavLink>SERVICE</NavLink></Link>
            </NavItem>

            {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggle} >
              <DropdownToggle nav caret>
                SERVICE
            </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>SERVICE REQUEST</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>SERVICE HISTORY</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}

            <Collapse
              isOpen={collapse}
            >
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </Nav>

        </div>
      </div>
    </div>
  )
}


export default CustomerSidebarComponent;
