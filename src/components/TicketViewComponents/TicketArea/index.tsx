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

import { TicketDataInterface } from '../../shared/Interfaces/TicketDataInterface';

const TicketArea: React.FC<TicketDataInterface> = (props) => {

    const {
        REACT_APP_ACTION_ASSIGN_TO_ME,
        REACT_APP_SITUATION_PENDING,
        REACT_APP_TITLE_RESPONSIBLE,
        REACT_APP_TITLE_PRIORITY
    } = process.env;
    
    const { data }  = props;
    const currentAttendant = data?.responsibleUser?.fullName ?? REACT_APP_SITUATION_PENDING;
    const priority = data?.priority;

    return (

        <Container>

            <TopOuterWrapper>

                <UserPic />

                <TopInnerWrapper>

                    <TicketComponentDetails data={data} />

                    <ClickableSpan innerText={REACT_APP_ACTION_ASSIGN_TO_ME} />

                </TopInnerWrapper>

            </TopOuterWrapper>

            <MidWrapper>

                <DescriptionComponentSmall
                    title={REACT_APP_TITLE_RESPONSIBLE}
                    boxValue={currentAttendant}
                />

                <AttendantPic />

            </MidWrapper>

            <BottomOuterWrapper>

                <BottomInnerWrapper>

                    <span>{REACT_APP_TITLE_PRIORITY}</span>

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