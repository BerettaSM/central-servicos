import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AddButton from '../../../components/shared/AddButton';
import CancelButton from '../../../components/shared/CancelButton';
import { Container } from './styles';

import UpdateNewTicket from '../../shared/Interfaces/UpdateNewTicket';

import { Api } from '../../../Api';
import TicketRequestDTO from '../../shared/Interfaces/TicketRequestDTO';

const ButtonsArea: React.FC<UpdateNewTicket> = ({ newTicketState }) => {

    const navigate = useNavigate();

    const saveTicket = async (ticketToSave: TicketRequestDTO): Promise<number> => {

        let returnCode = -1;

        await Api.post('/api/ticket', ticketToSave)
            
            .then((res: any) => {
                
                if(res.status === 200)
                    returnCode = res.data.id;

            })

            .catch(( error: any ) => {

                console.log(error);

            })
        
        return returnCode;

    }

    const handleClick = () => {

        if(newTicketState === undefined)
            throw new Error("Não foi possível ler os campos.");

        const ticketToSave = newTicketState[0];

        if(ticketToSave.title === '' || ticketToSave.description === '')
            return window.alert('Não deixe nenhum campo em branco.')

        saveTicket(ticketToSave).then(code => {

            if(code === -1) {

                window.alert("Não foi possível salvar o ticket.")

            } else {

                navigate(`/ticket-detail/${code}`);

            }

        });

    }

    return (

        <Container>

            <Link to={'/tickets'}>

                <CancelButton innerText="Cancelar" />

            </Link>

            <AddButton innerText="Novo Ticket" onClick={handleClick} />

        </Container>

    );
    
}

export default ButtonsArea;