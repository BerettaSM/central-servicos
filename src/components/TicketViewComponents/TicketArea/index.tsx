import React from 'react';


import UserPic from '../../../components/shared/UserPic';
import TicketComponentDetails from '../../../components/shared/TicketComponentDetails';
import DescriptionComponentSmall from '../../../components/shared/DescriptionComponentSmall';
import AttendantPic from '../../../components/shared/AttendantPic';
import ColorBar from '../../../components/shared/ColorBar';
import { 
    Container,
    TopOuterWrapper,
    TopInnerWrapper,
    MidWrapper,
    BottomOuterWrapper,
    BottomInnerWrapper
} from './styles';

const TicketArea: React.FC = () => {
    return (
        <Container>
            <TopOuterWrapper>
                <UserPic />
                <TopInnerWrapper>
                    <TicketComponentDetails data={{}} />
                    <span>Atribuir para mim</span>
                </TopInnerWrapper>
            </TopOuterWrapper>
            <MidWrapper>
                <DescriptionComponentSmall title='Responsável' boxValue='Maria Soares' />
                <AttendantPic />
            </MidWrapper>
            <BottomOuterWrapper>
                <BottomInnerWrapper>
                    <span>Prioridade</span>
                </BottomInnerWrapper>
                <BottomInnerWrapper>
                    <ColorBar />
                    <span>Alta</span>
                </BottomInnerWrapper>
            </BottomOuterWrapper>
        </Container>
    );
}

export default TicketArea;