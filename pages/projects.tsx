import { ReactElement } from "react";
import Example from "../component/Header";
import Layout from "../component/layout/layout";
import styles from "../styles/Home.module.scss";

function Project() {
    return (
        <div>
            <main className={styles.test}>
            </main>
        </div>
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