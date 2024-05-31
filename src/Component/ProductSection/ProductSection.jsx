import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container"
import  axiosConfige from '../../Api/axioxConfig.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Product.css'


const ProductSection = () => {
    const [items,setItems] = useState([]);
    const getData = async ()=>{
      const {data} = await axiosConfige();
      setItems(data)
    }

    useEffect(()=>{
  
    getData();
    },[])
  return (
    <Container className="d-flex flex-wrap mt-5 gap-3">
    <h4>Latest Products</h4>
    <Swiper
   
   modules={[Navigation]}
   navigation
   spaceBetween={50}
   slidesPerView={4}
   loop={true}
   
 >
   {items.map((ele)=>(
    <SwiperSlide key={ele.id} className="slidContainer">
    <Card   className="w-100 h-75">
    <Card.Img variant="top" src={ele.image} className="img"/>
    <Card.Body>
      <Card.Title>{ele.title.slice(0,20)}</Card.Title>
      <Card.Text>
        {ele.description.slice(0,20)}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
   </SwiperSlide>
   )).slice(1,6)}
   
   
 </Swiper>
    </Container>
  )
}

export default ProductSection