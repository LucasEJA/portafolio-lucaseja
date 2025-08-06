import React, { useState } from 'react';
import '../estilos/Abi.css';

export const Abi = () => {
    const [showFireworks, setShowFireworks] = useState(false);

    const handleButtonClick = () => {
        setShowFireworks(true);
        setTimeout(() => {
            setShowFireworks(false);
        }, 3000);  // Los fuegos artificiales duran 3 segundos
    };

    return (
        <div className="abi-container">
            <div className="abi-content">
                <h1 className="abi-title">¡Hola, Abi! 😊</h1>
                <p className="abi-message">Abi la mas sonriente jaja</p>
                <p className="abi-subtext">Pasa un buen día</p>
                <button className="abi-btn" onClick={handleButtonClick}>¿Te atreves a no hacer clic?</button>
                {showFireworks && <div className="fireworks-container">🎆🎇🎆 Abi abi, viste que no eres aburrida, así me encantas xd</div>}
            </div>
        </div>
    );
};
