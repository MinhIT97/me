function Service() {
    return (
        <section id="services">
            <div className="container m-auto">
                <div className="section-separator">
                    <div className=" relative md:w-2/3 p-4 m-auto top-center">
                        <div>
                            <div className="tmd:text-5xl text-2xl font-bold text-center">
                                My services
                            </div>
                            <div className="text-center mt-4 md:text-xl  text-base text-gray-600">
                                Whether you are working on a new startup or have an existing product. I'd love the opportunity to help you and your team solve your most challenging problems.
                            </div>
                            <div className=" grid grid-cols-2 m-auto gap-3 mt-3">
                                <img className="m-auto rounded " src="/4884785.jpg" alt="" />
                                <img className="m-auto rounded" src="/7365.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;