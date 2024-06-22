import Cart from '../Pages/Cart/Cart'
import { Navigate } from 'react-router';

const PrivateRoute = () => {
  const auth = localStorage.getItem("logged");

  return auth ? <Cart/> : <Navigate to={"/login"}/>
  
}

export default PrivateRoute