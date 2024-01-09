import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [errors, setErrors] = useState({});
      const [messageSent, setMessageSent] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value
        });
      };
    
      const validateForm = () => {
        const newErrors = {};
    
        // Sprawdź, czy pola email i wiadomość nie są puste
        if (formData.email.trim() === '') {
          newErrors.email = 'Pole Email nie może być puste.';
        }
    
        if (formData.message.trim() === '') {
          newErrors.message = 'Pole Wiadomość nie może być puste.';
        }
    
        // Sprawdź poprawność adresu email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Wprowadź poprawny adres email.';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          try {
            // Placeholder do wysyłki do API (zmień na rzeczywistą funkcję)
            // await sendToApi(formData);
            setMessageSent(true);
            // Wyczyść pola formularza po wysłaniu
            setFormData({
              name: '',
              email: '',
              message: ''
            });
            setErrors({});
          } catch (error) {
            console.error('Błąd podczas wysyłania wiadomości:', error);
            alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
          }
        }
      };

    return (
        <>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <div className="contact__form__group">
          <label className="contact__form__label" htmlFor="name">
            Imię
          </label>
          <input
            className="contact__form__input"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="contact__form__group">
          <label className="contact__form__label" htmlFor="email">
            Email*
          </label>
          <input
            className={`contact__form__input ${errors.email ? 'error' : ''}`}
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="contact__form__group">
          <label className="contact__form__label" htmlFor="message">
            Wiadomość*
          </label>
          <textarea
            className={`contact__form__input contact__form__input--textarea ${errors.message ? 'error' : ''}`}
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button className="contact__form__button" type="submit">
          Wyślij zapytanie
        </button>
      </form>
      {messageSent && <p className="contact__form__success__message">Wiadomość została wysłana!</p>}
        </>
    );
}

export default ContactForm;