import Image from "next/image";
import useTrans from "../../src/hooks/useTrans";
import mountains from '../../public/photo_2024-05-26_13-10-25-removebg-preview.png'
import git from '../../public/Git-Logo-1788C.png'
import laravel from '../../public/laravel.png'
import nextjs from '../../public/next-js.png'
import mysql from '../../public/mysql.png'
import vscode from '../../public/vscode.png'
import ubuntu from '../../public/ubuntu.png'
import IconImage from "../image/IconImage";
import figma from '../../public/figma.png';
import nestjs from '../../public/nestjs.png';
const calculateYearsDifference = () => {
    const startDate = new Date(2019, 10); // Tháng 11 là tháng 10 (vì tháng trong JavaScript bắt đầu từ 0)
    const currentDate = new Date();

    // Tính toán khoảng cách năm
    let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();

    // Điều chỉnh nếu tháng hiện tại trước tháng 11
    if (currentDate.getMonth() < startDate.getMonth() ||
        (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
        yearsDifference--;
    }

    return yearsDifference;
};
function Me() {
    const yearsDifference = calculateYearsDifference();
    const trans = useTrans();
    return (
        <section id="home" className="me">
            <div className=" m-auto">
                <div className=" info">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="info-skills  ">
                            <div className="mt-44  lg:mt-0 ">
                                Hi! I Am <span className="info-skills--job">Developer</span>
                            </div>
                            <div>
                                Nguyễn Văn Minh
                            </div>
                            <div className="info-skills--description">
                                Developer website for over {yearsDifference} years as a product developer
                            </div>
                            <div className="flex info-contact">
                                <div className="info-contact--hire-me">
                                    Hire me
                                </div>
                                <div className="flex items-center ml-6">
                                    Projects
                                    <div>
                                        <img src="../../arrows-right-top.png" width={20} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="" >
                            <div className="info-me pt-16 relative">
                                <div className="relative h-full" >
                                    <Image alt="me"
                                        src={mountains}
                                        placeholder="blur"
                                        quality={100}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <div>
                                    <IconImage  src={git} classParent="info-me--image-ball info-me--skill-git"   width={50} alt="git" />
                                    <IconImage  src={laravel} classParent="info-me--image-ball info-me--skill-laravel" width={35} alt="laravel" />
                                    <IconImage  src={nextjs} classParent="info-me--image-ball info-me--skill-nextjs" width={38} alt="nextjs" />
                                    <IconImage  src={mysql} classParent="info-me--image-ball info-me--skill-mysql" width={45} alt="mysql" />
                                    <IconImage  src={vscode} classParent="info-me--image-ball info-me--skill-vscode" width={40} alt="vscode" />
                                    <IconImage  src={ubuntu} classParent="info-me--image-ball info-me--skill-ubuntu" width={35} alt="ubuntu" />
                                    <IconImage  src={figma} classParent="info-me--image-ball info-me--skill-figma" width={40} alt="figma" />
                                    <IconImage  src={nestjs} classParent="info-me--image-ball info-me--skill-nestjs" width={40} alt="nestjs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Me;