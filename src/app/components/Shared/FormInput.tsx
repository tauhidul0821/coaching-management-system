import React from 'react';

const footerDesign: React.CSSProperties = {
    textAlign: 'center', 
};

const FormInput: React.FC = () => (
    <>
        <input type="email"  />
        <label htmlFor="email"></label>
    </>
);
export default FormInput
