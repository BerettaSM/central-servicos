import React from 'react';

import { Container, Input } from './styles';

interface INumberInput {
    beforeLabel?: string;
    afterLabel?: string;
    value: number;
    setValue: (n: number) => void;
    min?: number;
    max?: number;
}

const NumberInput: React.FC<INumberInput> = ({ beforeLabel, afterLabel, value, setValue, min=1, max=100 }) => {

    const validate = (e: React.KeyboardEvent) => {
        
        if(e.code === 'Minus') {

            e.preventDefault();

        }

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const val = Number(e.target.value);

        if(val < min) setValue(min);

        else if(val > max) setValue(max);

        else setValue(val);

    }

    return (

        <Container>

            {beforeLabel}<Input
                type="number"
                min={`${min}`}
                max={`${max}`}
                onKeyDown={validate}
                value={value}
                onChange={handleChange}
            />{afterLabel}

        </Container>

    );

}

export default NumberInput;