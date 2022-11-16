import React, { useState } from 'react';

import ColorBar from '../ColorBar';

import { Select, Wrapper } from './styles';

import {default as ISelectBox} from '../Interfaces/SelectBox';

import UpdateNewTicket from '../Interfaces/UpdateNewTicket';

type ISelectBoxWithUpdateNewTicket = ISelectBox & UpdateNewTicket;

const SelectBox: React.FC<ISelectBoxWithUpdateNewTicket> = ({title, renderColorBar, options, newTicketState, propertyToUpdate}) => {

    const [selectedOption, setSelectedOption] = useState("Baixa");
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
        const index = e.target.selectedIndex;

        const innerText = e.target[index].innerText;

        setSelectedOption(innerText);

        if(newTicketState !== undefined && propertyToUpdate !== undefined) {

            const [newTicket, setNewTicket] = newTicketState;

            switch(propertyToUpdate) {

                case 'priority':
                    newTicket[propertyToUpdate] = innerText;
                    break;

                case 'classificationId':
                    newTicket[propertyToUpdate] = Number(e.target.value);
                    break;

                case 'areaId':
                    newTicket[propertyToUpdate] = Number(e.target.value);
                    break;

            }

            setNewTicket(Object.assign({}, newTicket));

        }
        
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