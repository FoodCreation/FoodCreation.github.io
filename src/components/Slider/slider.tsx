"use client"
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
                autoplay={{ delay: 2000 }}
            >
                <SwiperSlide><img src="/img/desktop/01_IMG_9011.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/02_hachipo3.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/03_RPT1838.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/img_3858_720.webp" className="w-full object-cover" /></SwiperSlide>
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
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide><img src="/img/mobile/01_IMG_9011.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/02_hachipo3.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/03_RPT1838.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/img_3858_720.webp" className="w-full object-cover" /></SwiperSlide>
            </Swiper>
            {/* ここまで */}

        </div>

    );
};