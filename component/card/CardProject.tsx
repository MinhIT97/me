import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import Sim from '../../public/sim-card.png';
import Building from "../../src/svg/Building";
import Programer from "../../src/svg/Programer";
import Skill from "../../src/svg/skill";
export default function CardProject() {
    const [swiperRef, setSwiperRef] = useState(null);
    return (
        <>
            <div className="card-product">
                <div className="card-product-slide">
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        modules={[Mousewheel]}
                        mousewheel={true}
                        className="mySwiper"

                    >
                        <SwiperSlide>
                            <div className=" rounded-2xl overflow-hidden shadow-lg bg-white">
                                <img src="../usa.jpg" alt="" />
                                <div className="px-6 py-4">
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Building width={20} />
                                        <div className="font-bold text-base text-gray-600 ">VMMS</div>
                                    </div>
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Programer width={20} />
                                        <div className="font-bold text-xs text-gray-600 ">Nhân viên</div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <Skill width={20} />
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Laravel</span>
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Javascript</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" rounded-2xl overflow-hidden shadow-lg bg-white">
                                <img src="../usa.jpg" alt="" />
                                <div className="px-6 py-4">
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Building width={20} />
                                        <div className="font-bold text-base text-gray-600 ">VCCorp</div>
                                    </div>
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Programer width={20} />
                                        <div className="font-bold text-xs text-gray-600 ">Nhân viên</div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Laravel</span>
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Javascript</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" rounded-2xl overflow-hidden shadow-lg bg-white">
                                <img src="../usa.jpg" alt="" />
                                <div className="px-6 py-4">
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Building width={20} />
                                        <div className="font-bold text-base text-gray-600 ">Nissho Electronics</div>
                                    </div>
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Programer width={20} />
                                        <div className="font-bold text-xs text-gray-600 ">Nhân viên</div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Laravel</span>
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Javascript</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" rounded-2xl overflow-hidden shadow-lg bg-white">
                                <img src="../usa.jpg" alt="" />
                                <div className="px-6 py-4">
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Building width={20} />
                                        <div className="font-bold text-base text-gray-600 ">Shine Vision</div>
                                    </div>
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Programer width={20} />
                                        <div className="font-bold text-xs text-gray-600 ">Nhân viên</div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Laravel</span>
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Javascript</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div></div>



        </>
    )
}