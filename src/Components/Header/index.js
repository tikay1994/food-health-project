import React, { useState } from "react";
import logo from "../../Assets/Images/logo.svg";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <div className="icon-brand">
            <img width="36px" height="36px" src={logo} alt="logo" />
            <h2>Food and Health</h2>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Your foods</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Calories</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Calculation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Protein</DropdownItem>
                <DropdownItem>Fat</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Carbohidrat</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href="/login">
            <Button color="primary">Login</Button>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
