import { Container } from "react-bootstrap"
import './Cart.css'
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state)=>state.cart)

  return (
    <div className="mt-3">
      <Container>
        <h4>Shopping Cart</h4>
        <table className="shadow-sm">
        <tbody>
          {
            cart.map((item)=>(
              <tr key={item.id}>
            <td className="cartLine"><img src={item.image} alt="img-1"/></td>
            <td>{item.title}</td>
            <td><span>+</span>
            <span className="mx-3">0</span>
            <span>-</span>
            </td>
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