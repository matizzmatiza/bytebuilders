import { useEffect } from "react";
import { updateTitle } from '../utils/title';
import NewsList from "../components/newslist";

function News() {
    useEffect(() => {
        const cleanup = updateTitle('Aktualności');
        return cleanup;
    }, []);

    return (
        <section className="news">
            <NewsList />
        </section>
    );
}

export default News;