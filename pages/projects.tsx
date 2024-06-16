import { ReactElement } from "react";
import Example from "../component/Header";
import Layout from "../component/layout/layout";
import styles from "../styles/Home.module.scss";
import CardProject from '../component/card/CardProject';

function Project() {
    return (


        <CardProject />

    )
}

Project.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title="Home" >
            {page}
        </Layout>
    )
}

export default Project