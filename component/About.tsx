import { DownloadIcon, FolderDownloadIcon } from "@heroicons/react/outline";
import useTrans from "../src/hooks/useTrans";

import style from "../styles/Home.module.scss";

function About() {
    const trans = useTrans();
    return (
        <section id="about">
            <div className="container m-auto">
                <div className="m-auto max-w-screen-lg  section-separator">
                    <div className=" grid grid-cols-2 gap-20">
                        <img src="../work.jpg" alt="" />
                        <div>
                            <div className="font-bold text-3xl">{trans.home.aboutMe}</div>
                            <p className="mt-5 text-base">{trans.home.introduce}</p>
                            <div className={style.about + ' mt-6'}>
                                <ul className="flex gap-4 break-words flex-wrap ">
                                    <li>
                                        <span>Php</span>
                                    </li>
                                    <li>
                                        <span>Html</span>
                                    </li>
                                    <li>
                                        <span>Css</span>
                                    </li>
                                    <li>
                                        <span>Javascript</span>
                                    </li>
                                    <li>
                                        <span>React</span>
                                    </li>
                                    <li>
                                        <span>Nodejs</span>
                                    </li>
                                    <li>
                                        <span>Figma</span>
                                    </li>
                                    <li>
                                        <span>Zeplin</span>
                                    </li>
                                    <li>
                                        <span>Jenkin</span>
                                    </li>
                                    <li>
                                        <span>Git</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <a href="../NguyenVanMinh-php-0986082324.pdf" target={"_blank"} className="flex gap-3 bg-customTurquoise-100 w-40 p-2  rounded-3xl text-white items-center justify-center"><span className="font-bold">Download CV</span>  <FolderDownloadIcon width={20} /> </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
