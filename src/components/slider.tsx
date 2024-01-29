import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

export default function Slider() {
    return (
        <Swiper
            className="slider"
            modules={[Navigation, Pagination, Autoplay]}
            pagination
            loop={true}
            autoplay={{ delay: 4000 }}
        >
            <SwiperSlide><img src="/img/desktop/RPT3534.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/img/desktop/PXL0832.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/img/desktop/NIJV9793.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/img/desktop/IMG9248.jpg" /></SwiperSlide>
        </Swiper>
    );
};