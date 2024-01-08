import { useEffect } from "react";
import { updateTitle } from '../utils/title';

function Contact() {
    useEffect(() => {
        const cleanup = updateTitle('Kontakt');
        return cleanup;
    }, []);

    return (
        <section className="contact">
            <h1 className="contact__title">Kontakt</h1>
        </section>
    );
}

export default Contact;