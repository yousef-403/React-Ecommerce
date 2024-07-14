import Container from "react-bootstrap/esm/Container"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import img1 from '/public/1.jpg'
import img2 from '/public/2.jpg'
import img3 from '/public/3.jpg'
import img4 from '/public/4.jpg'

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
      <img className="imgSlider" src={img1} alt="img"/>
   </SwiperSlide>
   <SwiperSlide className="slidContainer">
     <img className="imgSlider" src={img2} alt="img"/>
   </SwiperSlide>
   <SwiperSlide className="slidContainer">
     <img className="imgSlider" src={img3} alt="img"/>
   </SwiperSlide>
   <SwiperSlide className="slidContainer">
     <img className="imgSlider" src={img4} alt="img"/>
   </SwiperSlide>
   
 </Swiper>
   </Container>
  )
}

export default MainSlider