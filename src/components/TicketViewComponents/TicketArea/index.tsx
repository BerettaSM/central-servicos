import React from 'react';

import UserPic from '../../../components/shared/UserPic';
import TicketComponentDetails from '../../../components/shared/TicketComponentDetails';
import DescriptionComponentSmall from '../../../components/shared/DescriptionComponentSmall';
import AttendantPic from '../../../components/shared/AttendantPic';
import ColorBar from '../../../components/shared/ColorBar';
import { TicketData } from '../../AllTicketsViewComponents/TicketTemplate';
import { 
    Container,
    TopOuterWrapper,
    TopInnerWrapper,
    MidWrapper,
    BottomOuterWrapper,
    BottomInnerWrapper
} from './styles';



const TicketArea: React.FC<TicketData> = (props) => {

    const { data } = props;
    const { currentAttendant, priorityStatus } = data;

    const priorityString = priorityStatus === 1 ? process.env.REACT_APP_PRIORITY_LOW
                          :priorityStatus === 2 ? process.env.REACT_APP_PRIORITY_MEDIUM
                          :priorityStatus === 3 ? process.env.REACT_APP_PRIORITY_HIGH
                                                : process.env.REACT_APP_PRIORITY_URGENT;

    return (
        <Container>
            <TopOuterWrapper>
                <UserPic />
                <TopInnerWrapper>
                    <TicketComponentDetails data={data} />
                    <span>Atribuir para mim</span>
                </TopInnerWrapper>
            </TopOuterWrapper>
            <MidWrapper>
                <DescriptionComponentSmall title='Responsável' boxValue={currentAttendant} />
                <AttendantPic />
            </MidWrapper>
            <BottomOuterWrapper>
                <BottomInnerWrapper>
                    <span>Prioridade</span>
                </BottomInnerWrapper>
                <BottomInnerWrapper>
                    <ColorBar priorityStatus={priorityStatus}/>
                    <span>{priorityString}</span>
                </BottomInnerWrapper>
            </BottomOuterWrapper>
        </Container>
    );
}

export default TicketArea;