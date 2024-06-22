
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'


const MainNav = () => {
  const cart = useSelector(state =>state.cart);
  const navigate = useNavigate();
  const Username = JSON.parse(localStorage.getItem("user"))
  const cartItems = JSON.parse(localStorage.getItem("cart"))
 
const handlrLogout = ()=>{
localStorage.removeItem("logged")
navigate("/login")
}

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
            <Link to="/cart" className='nav-link'>Cart - {cartItems.length}</Link>
          </Nav>

          <Navbar.Brand> <button className='btn btn-primary' onClick={handlrLogout}>Logout</button></Navbar.Brand>
          <Nav>
      
          <Link to="/login" className='nav-link'>Login</Link>
          <Link to="/register" className='nav-link'>Register</Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNav