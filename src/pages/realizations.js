import { useEffect } from "react";
import { updateTitle } from '../utils/title';

function Realizations() {
    useEffect(() => {
        const cleanup = updateTitle('Realizacje');
        return cleanup;
    }, []);

    return (
        <section className="realizations">
            <h1 className="realizations__title">Realizacje</h1>
        </section>
    );
}

export default Realizations;