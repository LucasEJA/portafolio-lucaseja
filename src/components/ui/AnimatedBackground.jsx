import React from 'react';
import { CODE_SNIPPETS, TECH_SYMBOLS, PROGRAMMING_SYMBOLS } from '../../constants/backgroundParticles';
import '../../styles/components/AnimatedBackground.css';

export const AnimatedBackground = () => {
    return (
        <div className="animated-background">
            {/* Gradiente base */}
            <div className="gradient-layer"></div>

            {/* Ondas sutiles */}
            <div className="wave-layer wave-1"></div>
            <div className="wave-layer wave-2"></div>
            <div className="wave-layer wave-3"></div>

            {/* Partículas de código flotantes */}
            <div className="code-particles">
                {CODE_SNIPPETS.map((snippet, index) => (
                    <div
                        key={`code-${index}`}
                        className="code-particle"
                        style={{
                            fontSize: Math.random() * 3 + 14 + 'px',
                            opacity: Math.random() * 0.4 + 0.4
                        }}
                    >
                        {snippet}
                    </div>
                ))}
            </div>

            {/* Símbolos técnicos */}
            <div className="tech-symbols">
                {TECH_SYMBOLS.slice(0, 10).map((symbol, index) => (
                    <div
                        key={`symbol-${index}`}
                        className="tech-symbol"
                        style={{
                            fontSize: Math.random() * 4 + 18 + 'px',
                            opacity: Math.random() * 0.3 + 0.4
                        }}
                    >
                        {symbol}
                    </div>
                ))}
            </div>

            {/* Símbolos de programación */}
            <div className="programming-symbols">
                {PROGRAMMING_SYMBOLS.slice(0, 5).map((symbol, index) => (
                    <div
                        key={`prog-${index}`}
                        className="programming-symbol"
                        style={{
                            fontSize: Math.random() * 4 + 20 + 'px',
                            opacity: Math.random() * 0.2 + 0.3
                        }}
                    >
                        {symbol}
                    </div>
                ))}
            </div>
        </div>
    );
};