import Form from 'react-bootstrap/Form';
import './login.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';




const Login = () => {
  const navigate = useNavigate();

  const [input,setInput] = useState({
    name:"",
    email:"",
    password:"",
  });

  const handleLogin = (e)=>{
    e.preventDefault();
   const logged =JSON.parse(localStorage.getItem("user"));

   if(
    input.email == logged.email && 
    input.password == logged.password
   )
   {
    localStorage.setItem("logged" ,true)
    navigate("/");
   }
   else {
    alert("wrong email or password ");
   }
  }
 
  return (
    <div className="container">
      <div className="login-form d-flex justify-content-center align-items-center w-50 m-auto  ">
   
      <form className='w-100 bg-body-tertiary p-4 h-75  shadow-sm d-flex flex-column justify-content-center' onSubmit={handleLogin}>
      <h2 className='text-center my-3 text-secondary'>Login</h2>
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
    <div className='d-flex gap-3 flex-wrap align-items-center'>
      <button type='submit' className=' my-3 btn btn-primary '>Login</button>
      <Link to="/register">you don't have account</Link>
    </div>
    
      </form>
      </div>
    </div>
  )
}

export default Login