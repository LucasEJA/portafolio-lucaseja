import React, { useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import '../../styles/components/Modal.css';

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  className = '',
  closeOnOverlayClick = false,
}) => {
  const titleId = useId();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'modal-size-sm',
    md: 'modal-size-md',
    lg: 'modal-size-lg',
    xl: 'modal-size-xl',
    full: 'modal-size-full',
  };

  const modalContent = (
    <div className="modal-overlay" role="presentation">
      <div
        className="modal-backdrop"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      <div
        className={`modal-dialog glass-card ${sizes[size] || sizes.md} ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
      >
        <div className="modal-header">
          {title && (
            <h2 id={titleId} className="modal-title">
              {title}
            </h2>
          )}
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <FaTimes size={18} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
