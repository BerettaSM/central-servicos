import React, { useState } from 'react';

import ColorBar from '../ColorBar';

import { Select, Wrapper } from './styles';

import {default as ISelectBox} from '../Interfaces/SelectBox';

const SelectBox: React.FC<ISelectBox> = ({ title, renderColorBar, options }) => {

    const [selectedOption, setSelectedOption] = useState("Baixa");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
        const index = e.target.selectedIndex;

        setSelectedOption(e.target[index].innerText);

    }
    
    return (

        <Select>

            <Wrapper>

                <span>{title}</span>

                {renderColorBar && <ColorBar priorityStatus={selectedOption} />}

            </Wrapper>

            <select id={title} onChange={handleChange}>

                {

                    options && options.map((option, idx) => {

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