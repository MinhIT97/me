import Image from "next/image";
import useTrans from "../../src/hooks/useTrans";
import mountains from '../../public/photo_2024-05-26_13-10-25-removebg-preview.png'
import git from '../../public/Git-Logo-1788C.png'
import laravel from '../../public/laravel.png'
import nextjs from '../../public/next-js.png'
import mysql from '../../public/mysql.png'
import vscode from '../../public/vscode.png'
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
                    <div className="grid grid-cols-2 gap-4">
                        <div className="info-skills">
                            <div>
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
                            <div className="info-me pt-16">
                                <div className="relative h-full" >
                                    <Image alt="me"
                                        src={mountains}
                                        placeholder="blur"
                                        quality={100}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                    <div className="info-me--skill-git">
                                        <Image alt="git"
                                            width={60}
                                            src={git}
                                            placeholder="blur"
                                            quality={100}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="info-me--skill-laravel">
                                        <Image alt="laravel"
                                            width={60}
                                            src={laravel}
                                            placeholder="blur"
                                            quality={100}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="info-me--skill-nextjs">
                                        <Image alt="nextjs"
                                            width={60}
                                            src={nextjs}
                                            placeholder="blur"
                                            quality={100}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="info-me--skill-mysql">
                                        <Image alt="mysql"
                                            width={60}
                                            src={mysql}
                                            placeholder="blur"
                                            quality={100}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="info-me--skill-vscode">
                                        <Image alt="vscode"
                                            width={60}
                                            src={vscode}
                                            placeholder="blur"
                                            quality={100}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
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