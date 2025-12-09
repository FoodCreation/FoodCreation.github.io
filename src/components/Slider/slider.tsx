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
                autoplay={{ delay: 4000 }}
            >
                <SwiperSlide><img src="/img/desktop/01_IMG_9011.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/02_hachipo3.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/03_RPT1838.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/desktop/04_IMG_5802.webp" /></SwiperSlide>
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
                <SwiperSlide><img src="/img/mobile/01_IMG_9011.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/02_hachipo3.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/03_RPT1838.webp" /></SwiperSlide>
                <SwiperSlide><img src="/img/mobile/04_IMG_5802.webp" /></SwiperSlide>
            </Swiper>
            {/* ここまで */}

        </div>

    );
};