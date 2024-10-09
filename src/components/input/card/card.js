import React from 'react';
import './card.css';

const Card = ({ header, body, footer, theme = 'sap' }) => {
  const cardClass = `${theme}-card`;
  const headerClass = `${theme}-card-header`;
  const bodyClass = `${theme}-card-body`;
  const footerClass = `${theme}-card-footer`;

  return (
    <div className={cardClass}>
      {header && <div className={headerClass}>{header}</div>}
      {body && <div className={bodyClass}>{body}</div>}
      {footer && <div className={footerClass}>{footer}</div>}
    </div>
  );
};

export default Card;
