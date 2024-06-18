import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Building from "../../src/svg/Building";
import Programer from "../../src/svg/Programer";
import Clock from "../../src/svg/Clock";
import Skills from "../../src/svg/Skills";


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

                                <div className="px-6 py-4 pb-0">
                                    <div className="font-bold text-base text-gray-600">
                                        WEB BÁN HÀNG
                                    </div>
                                    <div className="text-blue-400">
                                        <a href="https://mobifonehanoi.vn/">Đi đến website</a>
                                    </div>
                                    <div>
                                        <div className="font-bold text-base text-gray-600 ">   Công việc :</div>
                                        <ul className="list-inside list-disc pl-2">
                                            <li>
                                                Tạo các module cho core của công ty.
                                            </li>
                                            <li>
                                                Thiết kế database.
                                            </li>
                                            <li>
                                                RESTful API.
                                            </li>
                                            <li>
                                                Đẩy module lên packagist. <a className="text-blue-400" href="https://packagist.org/search/?query=webpress">Link tham khảo</a>
                                            </li>
                                            <li>
                                                Sử dụng module để tạo nhanh các website.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="px-6 py-4">
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Building width={20} />
                                        <div className="font-bold text-base text-gray-600 ">VMMS</div>
                                    </div>
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Clock width={20} />
                                        <div className=" text-sm text-gray-600 ">
                                            11/2019 - 08-2020
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Programer width={20} />
                                        <div className="font-bold text-xs text-gray-600 ">Nhân viên</div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <Skills width={20} />
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Laravel</span>
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-400 ring-inset ring-gray-500/10">Javascript</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" rounded-2xl overflow-hidden shadow-lg bg-white">
                                <div className="px-6 py-4 pb-0">
                                    <div className="font-bold text-base text-gray-600">
                                        WEB CRM
                                    </div>
                                    <div className="text-blue-400">
                                        <a href="https://bizfly.vn/giai-phap/bizfly-crm.html">Đi đến website</a>
                                    </div>
                                    <div>
                                        <div className="font-bold text-base text-gray-600 ">   Công việc :</div>
                                        <ul className="list-inside list-disc pl-2">
                                            <li>
                                                Phát triển hệ thống CRM quản lý khách hàng.
                                            </li>
                                            <li>
                                                Phát  triển các tính năng  báo cáo thống kê.
                                            </li>
                                            <li>
                                                Phân quyền, Export excel, Push Notification.
                                            </li>
                                            <li>
                                                Sử dụng module để tạo nhanh các website.
                                            </li>
                                            <li>
                                                Mã hóa bảo mật, Send sms, Tích hợp Harvan, Kiotviet, Janco.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="px-6 py-4">
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Building width={20} />
                                        <div className="font-bold text-base text-gray-600 ">VCCorp</div>
                                    </div>
                                    <div className="flex space-x-2 items-center mb-2">
                                        <Clock width={20} />
                                        <div className=" text-sm text-gray-600 ">
                                            08/2020 - 06/2022
                                        </div>
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