import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { LogOut } from "@styled-icons/entypo/LogOut";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";
import { resetDishes } from "../redux/actions/dish";
import { resetSearch } from "../redux/actions/search";
const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(resetDishes());
    dispatch(resetSearch());
  };

  return (
    <Navbar className="nav" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="link">
            Menu
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/search" className="link">
                Search
              </Link>
            </Nav.Link>
            <Nav.Link className="link" onClick={handleLogout}>
              Logout <LogOut width="20" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
