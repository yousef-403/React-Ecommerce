import Container from "react-bootstrap/esm/Container"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './MainSlider.css'

const MainSlider = () => {
  return (
   <Container>
   <Swiper
   className="my-3"
   modules={[Navigation]}
   navigation
   spaceBetween={50}
   slidesPerView={1}
   loop={true}
   
 >
   <SwiperSlide className="slidContainer">
      <img className="imgSlider" src="/public/images/1.jpg" alt="img"/>
   </SwiperSlide>
   <SwiperSlide className="slidContainer">
     <img className="imgSlider" src="/public/images/2.jpg" alt="img"/>
   </SwiperSlide>
   <SwiperSlide className="slidContainer">
     <img className="imgSlider" src="/public/images/3.jpg" alt="img"/>
   </SwiperSlide>
   <SwiperSlide className="slidContainer">
     <img className="imgSlider" src="/public/images/4.jpg" alt="img"/>
   </SwiperSlide>
   
 </Swiper>
   </Container>
  )
}

export default MainSlider