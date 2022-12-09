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
import { useUser } from '../../../auth';

const TicketArea: React.FC<TicketData> = ({ data, callback }) => {

    const user = useUser();

    const currentAttendant = data?.responsibleUser?.fullName ?? 'Aguardando Atendimento';
    const priority = data?.priority;
    const ticketId = data?.ticketId;
    const ticketStatus = data?.status;
    const description = data?.description;

    const isAttendantAlreadyAssigned = data?.responsibleUser?.id === user.data.userId;
    const isTicketAlreadyClosedOrCancelled = ticketStatus === 4 || ticketStatus === 5;
    const isAssignDisabled = isAttendantAlreadyAssigned || isTicketAlreadyClosedOrCancelled;

    const updateResponsibleUser = async () => {

        await Api.get("/api/ticket/assign-to-me", { 

            params: { 
                ticketId, 
                attendantId: user.data.userId 
            },

            headers: {
                'Authorization': `Bearer ${user.jwt}` 
            } 

        })

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

        if(user.data.userId === undefined || ticketId === undefined)

            return window.alert('Não foi possível atribuir o ticket.');

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

                <BottomInnerWrapper style={{ marginTop: '40px' }}>

                    <span style={{fontWeight: 'bolder'}}>Descrição: </span>

                    <span>{description}</span>

                </BottomInnerWrapper>

            </BottomOuterWrapper>

        </Container>

    );

}

export default TicketArea;