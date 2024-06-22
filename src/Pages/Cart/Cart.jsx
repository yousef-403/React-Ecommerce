import { Container } from "react-bootstrap"
import './Cart.css'



const Cart = () => {


  let ShoppingCart = JSON.parse(localStorage.getItem("cart"));

const totalPrice = ShoppingCart.reduce((acc,product)=>{
  acc += product.price
  return acc
},0)




  return (
    <div className="mt-3">
      <Container>
        <h4>Shopping Cart</h4>
        <h3 className="d-flex justify-content-center text-info">Total: {totalPrice}$</h3>
        <table className="shadow-sm">
        <tbody>
          {
            ShoppingCart.map((item)=>(
              <tr key={item.id}>
            <td className="cartLine"><img src={item.image} alt="img-1"/></td>
            <td>{item.title}</td>
          
            <td>{item.price}$</td>
          </tr>
            ))
          }
        
        </tbody>
       
        </table>

       
      </Container>
    
    </div>
  )
}

export default Cart