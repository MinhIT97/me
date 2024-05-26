import useTrans from "../src/hooks/useTrans";

function Me() {

    const trans = useTrans();
    return (
        <section id="home">
            <div className="container m-auto">
                <div className="section-separator">
                    <div className="md:grid md:grid-flow-col md:grid-cols-2 md:w-3/4 p-3 m-auto grid:gap-4 mt-16 " >
                        <div className="sm:col-span-1 m-auto ">
                            <div className="md:text-5xl text-2xl font-bold ">
                                <div>
                                    {trans.me.hello}
                                </div>
                                <div>
                                    {trans.me.title}
                                </div>
                            </div>
                            <div className="mt-4 md:text-xl text-base  text-gray-600">
                                <p>
                                    {trans.me.content}
                                </p>
                            </div>
                        </div>
                        <div className="m-auto">
                            <img src="../Group 1.png" />
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Me;