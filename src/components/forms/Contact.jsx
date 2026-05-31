import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import '../../styles/components/Contact.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('Mensaje enviado: ', result.text);
            toast.success('¡Mensaje enviado correctamente! Te responderé pronto.');
            resetForm();
        } catch (error) {
            console.error('Error al enviar: ', error.text);
            toast.error('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-container glass-section section-shell">
            <div className="contact-wrapper">
                <h2>Contactame</h2>
                <p>Por favor, completa el formulario para contactarme.</p>

                <form 
                    onSubmit={handleSubmit} 
                    className="contact-form glass-form"
                    aria-label="Formulario de contacto"
                >
                    <div className="form-group">
                        <label htmlFor="name">Nombre <span className="required-indicator" aria-label="requerido">*</span></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="glass-input"
                            aria-required="true"
                            aria-disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico <span className="required-indicator" aria-label="requerido">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="glass-input"
                            aria-required="true"
                            aria-disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Asunto <span className="required-indicator" aria-label="requerido">*</span></label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="glass-input"
                            aria-required="true"
                            aria-disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje <span className="required-indicator" aria-label="requerido">*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            disabled={isSubmitting}
                            className="glass-input"
                            aria-required="true"
                            aria-disabled={isSubmitting}
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn glass-button"
                        disabled={isSubmitting}
                        aria-disabled={isSubmitting}
                        aria-busy={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </section>
    );
};