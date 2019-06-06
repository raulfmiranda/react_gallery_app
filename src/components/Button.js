import React from 'react';

const Button = ({ children, type, onClick }) => (
    <button type={type} className="button" onClick={onClick}>
        {children}
    </button>
);

Button.defaultProps = {
    type: 'button'
}

export default Button;