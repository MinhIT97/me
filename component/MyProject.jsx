import Slider from "react-slick";
import useTrans from "../src/hooks/useTrans";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
        </div>
    );
}



function MyProject() {

    const trans = useTrans();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section id="projects" className=" relative  m-auto top-center" >
            <div className="container m-auto">
                <div className="section-separator">
                    <div className="max-w-5xl m-auto">
                        <div className="md:text-3xl text-2xl font-bold text-center">
                            {trans.myProject.myProject}
                        </div>
                        <div className="text-center mt-4 md:text-xl text-base  text-gray-600">
                            {trans.myProject.content}
                        </div>
                        <div className="  m-auto">
                            <Slider {...settings}>
                                <div className="p-4 focus:outline-none">
                                    <div className="grid grid-cols-5 gap-4">
                                        <div className="col-span-5 md:col-span-3">
                                            <img className="w-full h-auto" src="../Group67.png" alt="" />
                                        </div>
                                        <div className=" col-span-5 md:col-span-2" >
                                            <h4 className="md:text-3xl text-2xl font-bold mb-3 font-sans ">
                                                Sim selling website
                                            </h4>
                                            <p className=" text-base opacity-90">
                                                Website b??n sim ???????c ph??t tri???n nhanh ch??ng v???i hi???u su???t website cao ph?? h???p v???i m???c ????ch b??n h??ng online
                                            </p>
                                            <p className=" text-base opacity-90">
                                                Trang qu???n tr??? ???????c ph??t tri???n b???ng ng??n ng??? Angular mang ?????n tr???i nghi???m tuy???t v???i cho qu???n tr??? vi??n.
                                                <br />
                                                Website b??n h??ng ???????c thi???t k??? v?? x??y d???ng chu???n SEO, gi??p kh??ch h??ng c?? tr???i nghi???m m?????t m?? v?? d??? d??ng ???????c google ????a l??n top t??m ki???m
                                                . C??c ch???c n??ng c???a website ???????c t???i ??u ????? kh??ch h??ng c?? th??? mua h??ng v?? tham quan h??ng h??a 1 c??ch nhanh nh???t
                                            </p>
                                            <div className="mt-7">
                                                <a className="bg-customTurquoise-100  rounded-full p-2 px-10 text-white font-bold text-xl " target={"_blank"} href="https://mobifonehanoi.vn/">Get started</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="p-4 focus:outline-none">
                                    <div className="grid grid-cols-5 gap-4">
                                        <div className="col-span-5 md:col-span-3">
                                            <img className="w-full h-auto" src="../Group68.png" alt="" />
                                        </div>
                                        <div className="col-span-5 md:col-span-2">
                                            <h4 className="md:text-3xl text-2xl font-bold  font-sans mb-3">
                                                CRM Software
                                            </h4>
                                            <div>
                                                <p className=" text-base opacity-90">
                                                    Ph???n m???m CRM gi??p doanh nghi???p qu???n l?? c??c ho???t ?????ng t????ng t??c, ch??m s??c v???i kh??ch h??ng c???a m??nh h??nh th??nh n??n c??c m???i quan h??? kh??ch h??ng trung th??nh trong doanh nghi???p.
                                                </p>
                                            </div>

                                            <div className="mt-7">
                                                <a className="bg-customTurquoise-100  rounded-full p-2 px-10 text-white font-bold text-xl " target={"_blank"} href="https://bizfly.vn/giai-phap/bizfly-crm.html">Get started</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyProject;