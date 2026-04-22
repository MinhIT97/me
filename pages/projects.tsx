import { ReactElement } from "react";
import Layout from "../component/layout/layout";
import MyProject from "../component/MyProject";
import CardProject from "../component/card/CardProject";

function Project() {
    return (
        <div className="bg-portfolio-bg text-portfolio-200">
            <div className="pt-20">
                <CardProject />
            </div>
        </div>
    )
}

Project.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title="Projects">
            {page}
        </Layout>
    )
}

export default Project;