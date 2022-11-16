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

import TicketData from '../../shared/Interfaces/TicketData';

const TicketArea: React.FC<TicketData> = ({ data }) => {

    const currentAttendant = data?.responsibleUser?.fullName ?? 'Aguardando Atendimento';
    const priority = data?.priority;

    return (

        <Container>

            <TopOuterWrapper>

                <UserPic />

                <TopInnerWrapper>

                    <TicketComponentDetails data={data} />

                    <ClickableSpan innerText="Atribuir para mim" />

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