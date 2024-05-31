/* eslint-disable react-hooks/exhaustive-deps */
import Container from "react-bootstrap/esm/Container"
import './Shop.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect ,useState } from "react";
import { getProducts } from "../../redux/slices/productSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from "../../redux/slices/slice-cart";


const Shop = () => {
    
const products = useSelector((state)=> state.products)

const dispatch = useDispatch()

useEffect(()=>{
dispatch(getProducts())
},[])

    const [currentPage,setCurrentPage]= useState(1);
    const [postPerPage] = useState(4);
  
// pagination 

const lastPage = currentPage * postPerPage;
const firstPage = lastPage - postPerPage;

const currentProducts = products.slice(firstPage , lastPage);

const paginate = (number) => setCurrentPage(number);
const pageNumbers = [];
const  total = products.length;



for (let i =1 ; i<=Math.ceil(total / postPerPage); i++){
  pageNumbers.push(i)
}


  return (
   
   <Container> 
   <h3 className="mt-4">All Products</h3>
   <div className="d-flex flex-wrap justify-content-between gap-3  mt-2">
 
{
  currentProducts.map((item)=>(
    <Card key={item.id} style={{ width: '18rem'}}>
    <Card.Img variant="top" src={item.image} style={{height:"200px",width:"200px"}} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
      {item.description.slice(0,50)}
      </Card.Text>
      <Card.Title>{item.price} $</Card.Title>
      <Button variant="primary" onClick={()=>{dispatch(addToCart(item))}}>Add To Cart</Button>
    </Card.Body>
  </Card>
  ))
}
   <div className="navigationBtns my-4 d-flex justify-content-center w-100 gap-5 ">
   <ul className=" list-unstyled d-flex  gap-3 ">
   {
    pageNumbers.map((num,i)=>(
      <button key={i} onClick={()=>paginate(num)}>{num}</button>
    ))
  
   }
   </ul> 
  
   </div>
   </div>
   
   </Container>
  )
}

export default Shop