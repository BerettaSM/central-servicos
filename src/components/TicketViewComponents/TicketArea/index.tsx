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

    const { data } = props;
    const { currentAttendant, priorityStatus } = data;

    const {
        REACT_APP_PRIORITY_LOW,
        REACT_APP_PRIORITY_MEDIUM,
        REACT_APP_PRIORITY_HIGH,
        REACT_APP_PRIORITY_URGENT,
        REACT_APP_ACTION_ASSIGN_TO_ME,
        REACT_APP_TITLE_RESPONSIBLE,
        REACT_APP_TITLE_PRIORITY
    } = process.env;

    const priorityString = priorityStatus === 1 ? REACT_APP_PRIORITY_LOW
                         : priorityStatus === 2 ? REACT_APP_PRIORITY_MEDIUM
                         : priorityStatus === 3 ? REACT_APP_PRIORITY_HIGH
                                                : REACT_APP_PRIORITY_URGENT;

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

                    <ColorBar priorityStatus={priorityStatus}/>

                    <span>{priorityString}</span>

                </BottomInnerWrapper>

            </BottomOuterWrapper>

        </Container>

    );

}

export default TicketArea;