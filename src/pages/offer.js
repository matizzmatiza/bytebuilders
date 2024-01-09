import { useEffect } from "react";
import { updateTitle } from '../utils/title';

function Offer() {
    useEffect(() => {
        const cleanup = updateTitle('Oferta');
        return cleanup;
    }, []);

    return (
        <section className="offer">
            <h1 className="offer__title">Oferta</h1>
        </section>
    );
}

export default Offer;