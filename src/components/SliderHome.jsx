
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from "../assets/slider/1.jpg"
import slider2 from "../assets/slider/2.jpg"
import slider3 from "../assets/slider/3.jpg"
import slider4 from "../assets/slider/4.jpg"


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const SliderHome = () => {
    return (
        <div >
            <>
                <Swiper
                
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper rounded-md"
                >
                    <SwiperSlide>
                        <div className='md:h-[250px] lg:h-[350px]'>
                            <img className='w-full h-full object-cover' src={slider4}></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:h-[250px] lg:h-[350px]'>
                            <img className='w-full h-full object-cover' src={slider2}></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:h-[250px] lg:h-[350px]'>
                            <img className='w-full h-full object-cover' src={slider3}></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:h-[250px] lg:h-[350px]'>
                            <img className='w-full h-full object-cover' src={slider1}></img>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </>
        </div>
    );
};

export default SliderHome;