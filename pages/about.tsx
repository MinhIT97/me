import { ReactElement } from "react";
import Example from "../component/Header";
import Layout from "../component/layout/layout";
import styles from "../styles/Home.module.scss";
import CardAbout from "../component/card/CardAbout";

function About() {
    return (


        <CardAbout />

    )
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title="Home" >
            {page}
        </Layout>
    )
}

export default About