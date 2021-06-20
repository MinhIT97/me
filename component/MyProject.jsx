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
        <div id="project" className=" h-screen relative mt-36">
            <div className="m-auto ">
                <div className="md:text-5xl text-2xl font-bold text-center">
                    My Projects
                </div>
                <div className="text-center mt-4 md:text-xl text-base  text-gray-600">
                    Here are some interesting points in my projects...
                </div>

                <div className=" w-full m-auto">
                    <Slider {...settings}>
                        <div className="p-4 focus:outline-none">
                            <img className="w-full h-auto" src="../Selection_038.png" alt="" />
                        </div>
                        <div className="p-4 focus:outline-none">
                            <img className="w-full h-auto" src="../Selection_039.png" alt="" />
                        </div>
                        <div className="p-4 focus:outline-none">
                            <img className="w-full h-auto" src="../Selection_038.png" alt="" />
                        </div>
                        <div className="p-4 focus:outline-none">
                            <img className="w-full h-auto" src="../Selection_039.png" alt="" />
                        </div>
                        <div className="p-4 focus:outline-none">
                            <img className="w-full h-auto" src="../Selection_038.png" alt="" />
                        </div>

                    </Slider>

                </div>
            </div>

        </div>
    )
}

export default MyProject;