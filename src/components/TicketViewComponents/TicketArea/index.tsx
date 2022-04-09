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

import { TicketData } from '../../shared/Interfaces/TicketData';

const TicketArea: React.FC<TicketData> = (props) => {

    const { data } = props;
    const { currentAttendant, priorityStatus } = data;

    const TITLE_RESPONSIBLE   = process.env.REACT_APP_TITLE_RESPONSIBLE;
    const ACTION_ASSIGN_TO_ME = process.env.REACT_APP_ACTION_ASSIGN_TO_ME;
    const TITLE_PRIORITY      = process.env.REACT_APP_TITLE_PRIORITY;

    const priorityString = priorityStatus === 1 ? process.env.REACT_APP_PRIORITY_LOW
                         : priorityStatus === 2 ? process.env.REACT_APP_PRIORITY_MEDIUM
                         : priorityStatus === 3 ? process.env.REACT_APP_PRIORITY_HIGH
                                                : process.env.REACT_APP_PRIORITY_URGENT;

    return (

        <Container>

            <TopOuterWrapper>

                <UserPic />

                <TopInnerWrapper>

                    <TicketComponentDetails data={data} />

                    <ClickableSpan innerText={ACTION_ASSIGN_TO_ME} />

                </TopInnerWrapper>

            </TopOuterWrapper>

            <MidWrapper>

                <DescriptionComponentSmall
                    title={TITLE_RESPONSIBLE}
                    boxValue={currentAttendant}
                />

                <AttendantPic />

            </MidWrapper>

            <BottomOuterWrapper>

                <BottomInnerWrapper>

                    <span>{TITLE_PRIORITY}</span>

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