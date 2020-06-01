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
import { Link } from "react-router-dom";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [colorMenu, setColorMenu] = useState(false);
  const checkScroll = () => {
    if (!colorMenu && window.pageYOffset > 0) {
      setColorMenu(true);
    } else if (colorMenu && window.pageYOffset === 0) {
      setColorMenu(false);
    }
  };
  window.addEventListener("scroll", checkScroll);

  return (
    <div
      className="navbar-header"
      style={{
        backgroundColor: colorMenu
          ? "rgba(255, 255, 255)"
          : "rgba(255, 255, 255, 0)",
      }}
    >
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <div className="icon-brand">
            <img width="36px" height="36px" src={logo} alt="logo" />
            <h2 className="brand-name">Food and Health</h2>
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
          <Link to="/login">
            <Button color="success">Login</Button>
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
