import React, { useEffect, useState } from 'react';

import UserPic from '../../shared/UserPic';

import { 
    Container,
    TicketDetailsOuterWrapper,
    TicketDetailsInnerWrapper,
    TimeStampWrapper,
    DatetimeStampWrapper,
    DatetimeStampIcon
} from './styles';

import TicketMessage from '../../shared/Interfaces/TicketMessage';

const MessageHeader: React.FC<TicketMessage> = ({ data }) => {

    const { id, senderId, senderName, senderLevel, sendDate } = data;

    const [timeDifference, setTimeDifference] = useState("Desconhecido.");

    useEffect(() => {

        const getTimeDifference = () => {

            const millis = Date.now() - Date.parse(sendDate);
    
            const units: [number, string, string][] = [
                [31536000, 'ano', 'anos'],
                [2628288, 'meses', 'mês'],
                [86400, 'dias', 'dia'],
                [3600, 'horas', 'hora'],
                [60, 'minutos', 'minuto'],
            ];
    
            for(const unit of units) {
    
                const diff = Math.floor((millis / 1000) / unit[0]);

                if(diff > 0) {
    
                    return `${diff} ${diff > 1 ? unit[1] : unit[2]} atrás.`;
    
                }
    
            }
    
            return 'Agora';
    
        }

        const timeDifferenceUpdate = setInterval(() => {

            setTimeDifference(getTimeDifference());

        }, 60000);

        setTimeDifference(getTimeDifference());

        return () => clearInterval(timeDifferenceUpdate);

    }, [sendDate])

    return (

        <Container>

            <TicketDetailsOuterWrapper>

                <UserPic />

                <TicketDetailsInnerWrapper>

                    <span>Mensagem #{id}</span>

                    <span>{senderName} (#{senderId}) - {senderLevel}</span>

                    <DatetimeStampWrapper>

                        <DatetimeStampIcon />

                        <span>{sendDate}</span>

                    </DatetimeStampWrapper>

                </TicketDetailsInnerWrapper>

            </TicketDetailsOuterWrapper>

            <TimeStampWrapper>

                <span>{timeDifference}</span>

            </TimeStampWrapper>

        </Container>

    );
    
}

export default MessageHeader;