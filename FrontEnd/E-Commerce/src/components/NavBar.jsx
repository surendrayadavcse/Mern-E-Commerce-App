import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import Link from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const navigate=useNavigate()

  function handleLogout() {
    
    localStorage.removeItem("token");
    navigate("/login")
    
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products"  >Products</Nav.Link>
            
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="./login" >Login</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="./register">

              Register
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={handleLogout}  >Logout</NavDropdown.Item>
    
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;