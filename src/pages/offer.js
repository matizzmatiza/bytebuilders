import { useEffect } from "react";
import { updateTitle } from '../utils/title';

function Offer() {
    useEffect(() => {
        const cleanup = updateTitle('Oferta');
        return cleanup;
    }, []);

    return (
        <section className="section">
            <h1 className="section__title">Oferta</h1>
        </section>
    );
}

export default Offer;