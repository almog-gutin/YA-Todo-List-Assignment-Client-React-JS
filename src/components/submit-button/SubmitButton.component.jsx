import React from 'react';
import './submit-button.styles.scss';

const SubmitButton = ({ children, backgroundColor = '#303134', color = '#ffffff' }) => {
    return (
        <button type="submit" className="button" style={{ backgroundColor, color }}>
            {children}
        </button>
    );
};

export default SubmitButton;
