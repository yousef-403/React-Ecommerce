import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './register.css'
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';


const Register = () => {
const navigate = useNavigate();

  const [input,setInput] = useState({
    name:"",
    email:"",
    password:"",
  });

  const handleRegister = (e) =>{
    e.preventDefault();
    localStorage.setItem("user" , JSON.stringify(input));
    navigate("/login");
  }

  return (
    <div className="container">
    <div className="login-form d-flex justify-content-center align-items-center w-50 m-auto">
    <form className='w-100 bg-body-tertiary p-4 h-75  shadow-sm d-flex flex-column justify-content-center' onSubmit={handleRegister}>
    <h2 className='text-center my-3 text-secondary'>Register</h2>
    <InputGroup className="mb-3">
    <Form.Control
    name='name'
    value={input.name}
    onChange={(e)=>
      setInput({...input,[e.target.name]: e.target.value})
    }
      placeholder="Username"
      aria-label="Username"
    
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" 
  name='email'
  value={input.email}
  onChange={(e)=>
    setInput({...input,[e.target.name]: e.target.value})
  }/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password"
  name='password'
    value={input.password}
    onChange={(e)=>
      setInput({...input,[e.target.name]: e.target.value})
    }/>
</Form.Group>
<div className='d-flex gap-3 align-items-center'>
<button type='submit' className='sub-btn my-3 btn btn-primary '>Register</button>
<Link to="/login">Login</Link>
</div>
  
  
    </form>
    </div>
  </div>
  )
}

export default Register