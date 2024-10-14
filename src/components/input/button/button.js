import React, {useEffect} from 'react';
import './button.css';

const Button = ({ label, onClick, variant = 'default', disabled = false ,theme = 'sap' }) => {
  /*useEffect(() => {
    const btnMaterialDefault = document.querySelectorAll(".material-button-default");
    btnMaterialDefault.forEach((btn)=> {
      btn.addEventListener('click', (e) => {
        const { pageX, pageY, currentTarget } = e;
        let x = ((pageX - currentTarget.offsetLeft)*100) / currentTarget.offsetWidth;
        let y = ((pageY - currentTarget.Top)*100) / currentTarget.offsetHeight;
        const ripple = document.createElement("span");
        // const rippleColor = "#c2e0ff00";
        ripple.classList.add("ripple-effect-default");
        // ripple.style.background = rippleColor;
        ripple.style.left = x + "%";
        ripple.style.top = y + "%";
        btn.appendChild(ripple);
        
        
        setTimeout(() => {
          ripple.remove()
        },1000);
        
      });
    });
  }, []); */
  useEffect(() => {
    if (theme === 'material') {
      const buttons = document.querySelectorAll(`[class^="material-button"]`);

      const handleRipple = (e, rippleClass) => {
        const { pageX, pageY, currentTarget } = e;
        const x = ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
        const y = ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;

        const ripple = document.createElement('span');
        ripple.classList.add(rippleClass);
        ripple.style.left = `${x}%`;
        ripple.style.top = `${y}%`;
        currentTarget.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      };

      buttons.forEach((btn) => {
        let rippleClass;
        if (btn.classList.contains('material-button-secondary')) {
          rippleClass = 'ripple-effect-secondary';
        } else if (btn.classList.contains('material-button-tertiary')) {
          rippleClass = 'ripple-effect-tertiary';
        } else if (btn.classList.contains('material-button-success')) {
          rippleClass = 'ripple-effect-success';
        } else if (btn.classList.contains('material-button-error')) {
          rippleClass = 'ripple-effect-error';
        } else if (btn.classList.contains('material-button-warning')) {
          rippleClass = 'ripple-effect-warning';
        }else {
          rippleClass = 'ripple-effect-default';
        }

        btn.addEventListener('click', (e) => handleRipple(e, rippleClass));
      });

      // Cleanup: Rimuovi l'event listener quando il componente si smonta
      return () => {
        buttons.forEach((btn) => {
          btn.removeEventListener('click', handleRipple);
        });
      };
    }
  }, [theme]);
  const buttonClass = `${theme}-button ${theme}-button-${variant} ${disabled ? `${theme}-button-${variant}-disabled` : ''}`;
  
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled}
    //   variant={variant}
      type='button'
    >
      {label}
    </button>
  );
};

export default Button;