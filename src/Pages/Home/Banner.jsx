import axios from "axios";
import { useEffect, useState } from "react";
import './banner.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg hero"
                    style={{
                        'background-image':
                            'url(https://i.ibb.co/X7TMrL2/person-serving-another-from-large-pot-shutterstock-11172956638.webp)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <div className="hero-overlay bg-opacity-90 bg-black"></div>
                <SwiperSlide >
                    <div>
                        <div className="text-2xl md:text-5xl lg:mt-20  font-extrabold text-blue-500" data-swiper-parallax="-300">
                            Serving with Compassion <br />  and  Love .
                        </div>
                        <div data-swiper-parallax="-100">
                            <p className="text-xl font-bold text-zinc-950 w-2/5  mt-5">
                                We believe in serving with compassion and ensuring that no one goes hungry. Be a part of our food sharing community and make a positive impact.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div>
                        <div className="text-2xl md:text-5xl lg:mt-20  font-extrabold text-blue-500" data-swiper-parallax="-300">
                        Empower Our Community  <br />with Kindness  .
                        </div>
                        <div data-swiper-parallax="-100">
                            <p className="text-xl font-bold text-zinc-950 w-2/5  mt-5">
                            We`re dedicated to making a difference in our community. Join us in our mission to help those in need and share the joy of giving.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                        <div className="text-2xl md:text-5xl lg:mt-20  font-extrabold text-blue-500" data-swiper-parallax="-300">
                        Share the Blessing  <br />of Food   .
                        </div>
                        <div data-swiper-parallax="-100">
                            <p className="text-xl font-bold text-zinc-950 w-2/5  mt-5">
                            Every act of kindness matters. Donate food, share your resources, and show you care. Together, we can create a world without hunger.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Banner;