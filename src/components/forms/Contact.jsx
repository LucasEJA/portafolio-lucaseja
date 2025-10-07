import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <div id="contact" className="contact-container">
            <div className="contact-wrapper">
                <h2>Contactame</h2>
                <p>Por favor, completa el formulario para contactarme.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="subject">Asunto</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
                
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};