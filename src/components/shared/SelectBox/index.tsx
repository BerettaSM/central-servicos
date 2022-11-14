import React, { useState } from 'react';

import ColorBar from '../ColorBar';

import { Select, Wrapper } from './styles';

import { SelectBoxInterface } from '../Interfaces/SelectBoxInterface';

const SelectBox: React.FC<SelectBoxInterface> = (props) => {

    const [selectedOption, setSelectedOption] = useState("Baixa");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
        const index = e.target.selectedIndex;

        setSelectedOption(e.target[index].innerText);

    }
    
    return (

        <Select>

            <Wrapper>

                <span>{props.title}</span>

                {props.renderColorBar && <ColorBar priorityStatus={selectedOption} />}

            </Wrapper>

            <select id={props.title} onChange={handleChange}>

                {

                    props.options && props.options.map((option, idx) => {

                        return (

                            <option key={idx} value={option.id ?? idx}>{option.description}</option>
                            
                        );

                    })

                }

            </select>

        </Select>

    );

}

export default SelectBox;