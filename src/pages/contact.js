import { useEffect } from "react";
import { updateTitle } from '../utils/title';

function Contact() {
    useEffect(() => {
        const cleanup = updateTitle('Kontakt');
        return cleanup;
    }, []);

    return (
        <section className="section">
            <h1 className="section__title">Kontakt</h1>
        </section>
    );
}

export default Contact;