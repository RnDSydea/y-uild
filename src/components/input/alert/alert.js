import React, { useState } from 'react';
import './alert.css';

const Alert = ({ header, body, footer, theme = 'sap', variant="default", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const alertClass = `${theme}-alert ${isVisible ? 'fade-in' : 'fade-out'}`;
  const headerClass = `${theme}-alert-header`;
  const bodyClass = `${theme}-alert-body`;
  const footerClass = `${theme}-alert-footer`;

  return (
    <>
      {isVisible && (
        <div className="overlay">
          <div className={alertClass}>
            {header && <div className={headerClass}>{header}</div>}
            {body && <div className={bodyClass}>{body}</div>}
            {footer && <div className={footerClass}>{footer}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
