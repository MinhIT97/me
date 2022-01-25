import useTrans from "../src/hooks/useTrans";

function Experiences() {
    const trans = useTrans();
    return (
        <section id="experiences" >
            <div className="container m-auto">
                <div className="max-w-5xl m-auto">
                    <div className="section-separator">
                        <div className="grid grid-cols-2 gap-20 text-white">
                            <div>
                                <h3 className="text-4xl font-bold mb-12 text-black">
                                    {trans.experiences.education}
                                </h3>
                                <div className="md:flex bg-gray-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                    <div className="pt-6 md:p-8 text-center md:text-left ">
                                        <div>
                                            <h4 className="text-xl">
                                                Information Technology
                                                <a href="" className="text-customTurquoise-100 italic ml-2 font-semibold">HUMG</a>
                                            </h4>
                                        </div>
                                        <div className="text-customTurquoise-100 my-2">
                                            2015 - 2020
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium">
                                                {trans.experiences.specialization}  : Software technology
                                                <br />
                                                {trans.experiences.graduationGPA}: 2.42
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-12 text-black">
                                    Work Experience
                                </h3>
                                <div className="gap-5 grid">
                                    <div className="md:flex bg-gray-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                        <div className="pt-6 md:p-8 text-center md:text-left ">
                                            <div>
                                                <h4 className="text-xl">
                                                    Software developer
                                                    <a href="" className="text-customTurquoise-100 italic ml-2 font-semibold">VMMS</a>
                                                </h4>
                                            </div>
                                            <div className="text-customTurquoise-100 my-2">
                                                11/2019 - 9/2020
                                            </div>
                                            <div>
                                                {trans.experiences.responsibility} :
                                                <ul className="list-disc ml-8">
                                                    <li>Software developer</li>
                                                    <li>Module development</li>
                                                    <li>Api design</li>
                                                    <li>DB design</li>
                                                    <li>Frontend developer</li>
                                                </ul>
                                                <div className="mt-3">
                                                    {trans.experiences.technology}: Laravel , Jquery , Angular , React , Mysql.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="md:flex bg-gray-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                        <div className="pt-6 md:p-8 text-center md:text-left ">
                                            <div>
                                                <h4 className="text-xl">
                                                    Software developer
                                                    <a href="" className="text-customTurquoise-100 italic ml-2 font-semibold">Hiwin</a>
                                                </h4>
                                            </div>
                                            <div className="text-customTurquoise-100 my-2">
                                                10-2020 - 12/2020
                                            </div>
                                            <div>
                                                {trans.experiences.responsibility} :
                                                <ul className="list-disc ml-8">
                                                    <li>Mobile app developer (React native)</li>
                                                    <li>Parse api response</li>
                                                </ul>
                                            </div>
                                            <div className="mt-3">
                                                {trans.experiences.technology}: React native , redux.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex bg-gray-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                        <div className="pt-6 md:p-8 text-center md:text-left ">
                                            <div>
                                                <h4 className="text-xl">
                                                    Software developer
                                                    <a href="" className="text-customTurquoise-100 italic ml-2 font-semibold">VCcorp</a>
                                                </h4>
                                            </div>
                                            <div className="text-customTurquoise-100 my-2">
                                                12/2020 - Now
                                            </div>
                                            <div>
                                                {trans.experiences.responsibility} :
                                                <ul className="list-disc ml-8">
                                                    <li>Software developer</li>
                                                    <li>Module development</li>
                                                    <li>Api design</li>
                                                    <li>DB design</li>
                                                    <li>Frontend developer</li>
                                                </ul>
                                                <div className="mt-3">
                                                    {trans.experiences.technology}: Laravel , Mongodb , Jenkin , Jquery , Mithriljs.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experiences;