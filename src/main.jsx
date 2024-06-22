
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from './Pages/Home/Home.jsx'
  import Shop from './Pages/Shop/Shop.jsx'
  import Cart from './Pages/Cart/Cart.jsx'
import './index.css'
import Layout from './Layout/Layout.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import Login from './Pages/login/Login.jsx';
import Register from './Pages/Register/Register.jsx'
import PrivateRoute from './privateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element:<Provider store={store}><Layout/></Provider>,
        children:[
            {
                path: "/",
                element : <Home/>,
            },
            {
                path: "/shop",
                element:<Shop/>
               },
               {
                path: "/cart",
                element:<PrivateRoute><Cart/></PrivateRoute>
               },{
                path:"/login",
                element:<Login/>
               },{
                path:"/register",
                element:<Register/>
               }
        ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router} />


)
