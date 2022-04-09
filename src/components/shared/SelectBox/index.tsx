import React from 'react';

import ColorBar from '../ColorBar';

import {
    Select,
    Wrapper
} from './styles';

interface SelectBoxInterface{
    title: string | undefined;
    options: Array<String | undefined>;
    renderColorBar?: boolean;
}

const SelectBox: React.FC<SelectBoxInterface> = (props) => {

    return (

        <Select>

            <Wrapper>

                <span>{props.title}</span>

                {props.renderColorBar && <ColorBar />}

            </Wrapper>

            <select>

                {

                    props.options.map((option, idx) => {

                        return <option key={idx} value={idx}>{option}</option>;

                    })

                }

            </select>

        </Select>

    );

}

export default SelectBox;