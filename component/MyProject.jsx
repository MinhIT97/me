import Slider from "react-slick";

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
                            My Projects
                        </div>
                        <div className="text-center mt-4 md:text-xl text-base  text-gray-600">
                            Here are some interesting points in my projects...
                        </div>
                        <div className="  m-auto">
                            <Slider {...settings}>
                                <div className="p-4 focus:outline-none">
                                    <div className="grid grid-cols-5 gap-4">
                                        <div className="col-span-3">
                                            <img className="w-full h-auto" src="../Group67.png" alt="" />
                                        </div>
                                        <div className="col-span-2" >
                                            <h4 className="md:text-3xl text-2xl font-bold mb-3 font-sans ">
                                                Sim selling website
                                            </h4>
                                            <p className=" text-base opacity-90">
                                                Website bán sim được phát triển nhanh chóng với hiệu suất website cao phù hợp với mục đích bán hàng online
                                            </p>
                                            <p className=" text-base opacity-90">
                                                Trang quản trị được phát triển bằng ngôn ngữ Angular mang đến trải nghiệm tuyệt vời cho quản trị viên.
                                                <br />
                                                Website bán hàng được thiết kế và xây dựng chuẩn SEO, giúp khách hàng có trải nghiệm mượt mà và dễ dàng được google đưa lên top tìm kiếm
                                                . Các chức năng của website được tối ưu để khách hàng có thể mua hàng và tham quan hàng hóa 1 cách nhanh nhất
                                            </p>

                                            <div className="mt-7">
                                                <a className="bg-customTurquoise-100  rounded-full p-2 px-10 text-white font-bold text-xl " href="https://mobifonehanoi.vn/">Get started</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="p-4 focus:outline-none">
                                    <div className="grid grid-cols-5 gap-4">
                                        <div className="col-span-3">
                                            <img className="w-full h-auto" src="../Group68.png" alt="" />
                                        </div>
                                        <div className="col-span-2">
                                            <h4 className="md:text-3xl text-2xl font-bold  font-sans mb-3">
                                                CRM Software
                                            </h4>
                                            <div>
                                                <p className=" text-base opacity-90">
                                                    Phần mềm CRM giúp doanh nghiệp quản lý các hoạt động tương tác, chăm sóc với khách hàng của mình hình thành nên các mối quan hệ khách hàng trung thành trong doanh nghiệp.
                                                </p>
                                            </div>

                                            <div className="mt-7">
                                                <a className="bg-customTurquoise-100  rounded-full p-2 px-10 text-white font-bold text-xl " href="https://mobifonehanoi.vn/">Get started</a>
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