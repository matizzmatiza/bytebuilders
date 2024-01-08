import { useEffect } from "react";
import { updateTitle } from '../utils/title';

function News() {
    useEffect(() => {
        const cleanup = updateTitle('Aktualności');
        return cleanup;
    }, []);

    return (
        <section className="section">
            <h1 className="section__title">Aktualności</h1>
        </section>
    );
}

export default News;