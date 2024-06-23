import { useState } from "react";
import Graduation from "../../src/svg/Graduation";
import FootPrint from "../../src/svg/FootPrint";
import GPA from "../../src/svg/GPA";
import Email from "../../src/svg/Email";
import Passion from "../../src/svg/Passion";
import Gender from "../../src/svg/Gender";

const calculateYearsDifference = () => {
    const startDate = new Date(1997, 7); // Tháng 11 là tháng 10 (vì tháng trong JavaScript bắt đầu từ 0)
    const currentDate = new Date();
    // Tính toán khoảng cách năm
    let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
    return yearsDifference;
};
export default function CardAbout() {
    const [swiperRef, setSwiperRef] = useState(null);
    const yearsDifference = calculateYearsDifference();
    return (
        <>
            <div className="card-product">
                <div className=" rounded-2xl overflow-hidden shadow-lg bg-white">
                    <div className="px-6 py-4 pb-0">
                        <div className="font-bold text-base text-gray-600">
                            Nguyễn Văn Minh
                        </div>
                        <div className="flex space-x-2 items-center mb-2">
                            <FootPrint width={20} />
                            <div className=" text-base text-gray-600 ">06/08/1997 ({yearsDifference})</div>
                        </div>
                        <div className="flex space-x-2 items-center mb-2">
                            <Graduation width={20} />
                            <div className="font-bold text-base text-gray-600">Trường Đại học Mỏ – Địa chất (Hanoi University of Mining and Geology)</div>
                        </div>
                        <div className="flex space-x-2 items-center mb-2">
                            <Passion width={20} />
                            <div className=" text-base text-gray-600 ">Software Technology</div>
                        </div>
                        <div className="flex space-x-2 items-center mb-2">
                            <div className="font-bold text-base text-gray-600">
                                Confers:
                            </div>
                            <div className=" text-base text-gray-600 ">The degree of engineer</div>
                        </div>
                        <div className="flex space-x-2 items-center mb-2">
                            <GPA width={20} />
                            <div className=" text-base text-gray-600 ">2.42</div>
                        </div>
                        <div className="flex space-x-2 items-center mb-2">
                            <Email width={20} />
                            <div className=" text-base text-gray-600 ">minh06081997@gmail.com</div>
                        </div>
                        <div className="flex space-x-2 items-center mb-2">
                            <Gender width={20} />
                            <div className=" text-base text-gray-600 ">Nam</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}