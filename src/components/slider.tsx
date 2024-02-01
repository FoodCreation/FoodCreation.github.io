import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

export default function Slider() {
    return (
        <div className='slider-swiper'>

            {/* ここからデスクトップ向け表示 */}
            <Swiper
                className="
            [&_.swiper-wrapper]:hidden
            [&_.swiper-wrapper]:lg:flex
            "
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 4000 }}
            >
                <SwiperSlide><img src="/img/desktop/RPT3534.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/PXL0832.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/NIJV9793.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/IMG9248.jpg" /></SwiperSlide>
            </Swiper>
            {/* ここまで */}

            {/* ここからモバイル向け表示 */}
            <Swiper
                className="
            [&_.swiper-wrapper]:flex
            [&_.swiper-wrapper]:lg:hidden
            "
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 4000 }}
            >
                <SwiperSlide><img src="/img/mobile/RPT3534_M.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/PXL0832_M.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/NIJV9793_M.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/IMG9248_M.jpg" /></SwiperSlide>
            </Swiper>
            {/* ここまで */}

        </div>

    );
};