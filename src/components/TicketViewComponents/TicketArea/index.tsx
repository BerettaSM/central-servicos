import React from 'react';

import UserPic from '../../../components/shared/UserPic';
import TicketComponentDetails from '../../../components/shared/TicketComponentDetails';
import DescriptionComponentSmall from '../../../components/shared/DescriptionComponentSmall';
import AttendantPic from '../../../components/shared/AttendantPic';
import ClickableSpan from '../../shared/ClickableSpan';
import ColorBar from '../../../components/shared/ColorBar';

import { 
    Container,
    TopOuterWrapper,
    TopInnerWrapper,
    MidWrapper,
    BottomOuterWrapper,
    BottomInnerWrapper
} from './styles';

import { Api } from '../../../Api';

import TicketData from '../../shared/Interfaces/TicketData';

const TicketArea: React.FC<TicketData> = ({ data, callback }) => {

    const currentAttendant = data?.responsibleUser?.fullName ?? 'Aguardando Atendimento';
    const priority = data?.priority;

    const { REACT_APP_MOCK_USER_ID } = process.env; // Pra testes
    const attendantId = REACT_APP_MOCK_USER_ID ? 1 : Number(REACT_APP_MOCK_USER_ID); // Pra testes

    const ticketId = data?.ticketId;
    const ticketStatus = data?.status;

    const isAttendantAlreadyAssigned = data?.responsibleUser?.id === attendantId;
    const isTicketAlreadyClosedOrCancelled = ticketStatus === 4 || ticketStatus === 5;
    const isAssignDisabled = isAttendantAlreadyAssigned || isTicketAlreadyClosedOrCancelled;

    const updateResponsibleUser = async () => {

        const url = "/api/ticket/assign-to-me";

        await Api.get(url, { params: { ticketId, attendantId } })

            .then(res => {

                let result = res.data;

                if(result && callback !== undefined) {

                    callback(result);

                }

            })

            .catch(error => {

                console.log(error);

            })

    }

    const assignToMe = () => {

        if(attendantId === undefined || ticketId === undefined)
            return window.alert('Algo de errado não está certo.');

        (async () => {

            updateResponsibleUser();
            
        })();

    }

    return (

        <Container>

            <TopOuterWrapper>

                <UserPic />

                <TopInnerWrapper>

                    <TicketComponentDetails data={data} />

                    <ClickableSpan innerText="Atribuir para mim" onClick={assignToMe} isDisabled={isAssignDisabled}/>

                </TopInnerWrapper>

            </TopOuterWrapper>

            <MidWrapper>

                <DescriptionComponentSmall
                    title="Responsável"
                    boxValue={currentAttendant}
                />

                <AttendantPic />

            </MidWrapper>

            <BottomOuterWrapper>

                <BottomInnerWrapper>

                    <span>Prioridade</span>

                </BottomInnerWrapper>
                
                <BottomInnerWrapper>

                    <ColorBar priorityStatus={priority}/>

                    <span>{priority}</span>

                </BottomInnerWrapper>

            </BottomOuterWrapper>

        </Container>

    );

}

export default TicketArea;