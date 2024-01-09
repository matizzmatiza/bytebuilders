import { useEffect } from "react";
import { updateTitle } from '../utils/title';
import ContactForm from "../components/contactform";

function Contact() {
    useEffect(() => {
        const cleanup = updateTitle('Kontakt');
        return cleanup;
    }, []);

    return (
        <section className="contact">
            <h1 className="contact__title">Kontakt</h1>
            <div className="contact__wrapper">
                <div className="contact__info">
                    <p className="contact__info__desc">Zapraszamy do kontaktu z naszą firmą. Gwarantujemy profesjonalizm, wysoką jakość i wsparcie na każdym etapie współpracy. Skontaktuj się z nami, aby dowiedzieć się więcej i rozpocząć naszą współpracę!</p>
                    <h3 className="contact__info__title">Dane kontaktowe</h3>
                    <p className="contact__info__desc">Telefon: <a href="tel:+48790123456" className="contact__info__phone">+48 790 123 456</a></p>
                    <p className="contact__info__desc">Email: <a href="mailto:kontakt@bytebuilders.pl" className="contact__info__email">kontakt@bytebuilders.pl</a></p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;