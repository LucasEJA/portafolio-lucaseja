import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../estilos/Contact.css';
import { Modal } from './Modal';
import { Abi } from './Abi';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Enviar el formulario a EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si name, email y subject contienen "abi" (sin importar mayúsculas/minúsculas)
        const isAbiMessage =
            formData.name.toLowerCase().trim() === 'abi' &&
            formData.email.toLowerCase().trim() === 'abi' &&
            formData.subject.toLowerCase().trim() === 'abi';

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then((result) => {
                console.log('Mensaje enviado: ', result.text);
                toast.success('Formulario enviado correctamente');

                // Si es un mensaje "abi", abrir el modal
                if (isAbiMessage) {
                    setIsModalOpen(true);
                }
            })
            .catch((error) => {
                console.log('Error al enviar: ', error.text);
                toast.error('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
            });
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div id="contact" className="contact-container">
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
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type={formData.email.toLowerCase().trim() === 'abi' ? 'text' : 'email'}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                    />
                </div>
                <button type="submit" className="submit-btn">Enviar</button>
            </form>
            <ToastContainer />

            {/* Modal secreto para Abi */}
            <Modal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                title="¡Abi Abi Abi!"
            >
                <Abi />
            </Modal>
        </div>
    );
};
