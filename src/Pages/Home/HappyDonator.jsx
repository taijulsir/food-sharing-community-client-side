
import { MdVerified } from 'react-icons/md';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const HappyDonator = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl font-bold mb-5'>Our Happy Donator ❤</h1>
            <Swiper

                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    // When window width is >= 640px
                    425: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}

            >
                {/* slide 1 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/G9b4sTz/kW9o.jpg' alt="" />

                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">"Sarah has been consistently sharing her surplus food with our community. Her contributions have made a significant impact in reducing food waste and helping those in need!." </p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">Sarah Johnson</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Marketing Manager</p>
                    </div>
                </SwiperSlide>


                {/* Slider 2 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/XtGHyH7/istockphoto-1159212661-612x612.jpg' alt="" />

                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center"> "Michael's commitment to the cause of food sharing is truly remarkable. He regularly donates fresh produce and encourages others to join the movement."</p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">Michael Rodriguez</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Graphic Designer</p>
                    </div>
                </SwiperSlide>

                {/* Slider 3 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/qpYffk3/hhhg.jpg' alt="" />

                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">Emily's dedication to food sharing is inspiring. She has introduced innovative ways to share and connect with others in the community.</p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">Emily Chen</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>UX Designer</p>
                    </div>
                </SwiperSlide>

                {/* Slider 4 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/n3q8zyX/download-10.jpg' alt="" />

                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center"> "James has made a positive impact by sharing excess food from his events. His support has been instrumental in our mission to reduce food waste." </p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 "> James Wilson</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Marketing Manager</p>
                    </div>
                </SwiperSlide>

                {/* slider 5 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/6bNG2mV/depositphotos-150975580-stock-photo-portrait-of-businesswoman-in-office.webp' alt="" />

                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center"> "Maria's consistent donations have been a lifeline for many in our community. Her kindness and generosity shine through her contributions." </p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 "> Maria Gonzalez</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Content Marketer</p>
                    </div>
                </SwiperSlide>


                {/* Slider 6 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/yhkkyqv/1.jpgg' alt="" />

                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">"David is an active contributor to our food sharing program. His donations have helped bridge the gap between food surplus and those in need."</p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">David Lee</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Marketing Manager</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HappyDonator;