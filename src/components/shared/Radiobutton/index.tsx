import React from 'react';

import { Container } from './styles';

interface IRadiobutton {
    value: string;
    label: string;
    isChecked: boolean;
    handleChange: (v: string) => void;
}

const Radiobutton: React.FC<IRadiobutton> = ({ label, value, isChecked, handleChange }) => {
    
    return (

        <Container>

            <input
                type="radio"
                id={value}
                name={value}
                value={value}
                onChange={() => handleChange(value)}
                checked={isChecked}
            />

            <label htmlFor={value}>{label}</label>

        </Container>

    );

}

export default Radiobutton;