import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


const MainNav = () => {
  const cart = useSelector(state =>state.cart)


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <Link to="/" className='nav-link'>E-Commerce-React</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/shop" className='nav-link'>Shop</Link>
            <Link to="/cart" className='nav-link'>Cart - {cart.length}</Link>
          </Nav>
          <Nav>
          <Link to="/login" className='nav-link'>Login</Link>
          <Link to="/login" className='nav-link'>Register</Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNav