import CircleButton from '@/component/CircleButton/CircleButton'
import PlayerOverall from '@/component/PlayerOverall/PlayerOverall';

import { currentFormatter } from '@/consts/currencyFormatter';

import {
    PlayerCard_Container,
    PlayerCard_Wrapper,

    PlayerCard_FirstSection,
    PlayerCard_Team,
    PlayerCard_Fix,

    PlayerCard_SecondSection,
    PlayerCard_PlayerImg,
    PlayerCard_CountryFlag,
    
    PlayerCard_ThirdSection,
    PlayerCard_PlayerName,
    PlayerCard_PlayerInfo,
    PlayerCard_PlayerTooltip,
    PlayerCard_PlayerValue,

    PlayerCard_FourthSection,
} from './styles';

interface PlayerCard {
    overall: number;
    teamImg?: string;
    playerImg?: string;
    countryFlag: string;
    name: string;
    position: string;
    age: number;
    height: string;
    weight: string;
    transferValue: number;
}
  
function PlayerCard({ overall, teamImg, playerImg, countryFlag, name, position, age, height, weight, transferValue }: PlayerCard) {

    return (
        <PlayerCard_Container>
            <PlayerCard_Wrapper>
                {/* First section is player overall and team logo or nothing if does't have any team */}
                <PlayerCard_FirstSection>
                    <PlayerOverall overall={overall} />
                    <PlayerCard_Team src={teamImg} />
                </PlayerCard_FirstSection>


                {/* Second section is player image and country image */}
                <PlayerCard_SecondSection>
                    <PlayerCard_PlayerImg src={playerImg} />    
                    <PlayerCard_CountryFlag src={countryFlag} />    
                </PlayerCard_SecondSection>


                {/* Third section is player name, position, age, height and weight */}
                <PlayerCard_ThirdSection>
                    <PlayerCard_PlayerName data-tooltip-id='my-tooltip-inline' data-tooltip-content='roberto firmino santos alves'>roberto firmino santos alves</PlayerCard_PlayerName> 
                    <PlayerCard_PlayerTooltip id='my-tooltip-inline' />
                    <PlayerCard_PlayerInfo>{`${position} | ${age} anos | ${height} cm | ${weight} kg`}</PlayerCard_PlayerInfo> 
                    <PlayerCard_PlayerValue>{`${currentFormatter(transferValue)}`}</PlayerCard_PlayerValue>
                    
                </PlayerCard_ThirdSection>


                {/* Fourth section is action buttons, informations, favorite and offer proposal */}
                <PlayerCard_FourthSection>
                    <CircleButton actionType='info' onClick={() => {}} />
                    <CircleButton actionType='ativedFavorite'onClick={() => {}} />
                    <CircleButton actionType='offerProposal'onClick={() => {}} />
                </PlayerCard_FourthSection>
            </PlayerCard_Wrapper>



            <PlayerCard_Fix></PlayerCard_Fix>
            <PlayerCard_Fix></PlayerCard_Fix>
            <PlayerCard_Fix></PlayerCard_Fix>
            <PlayerCard_Fix></PlayerCard_Fix>
            <PlayerCard_Fix></PlayerCard_Fix>

        </PlayerCard_Container>
        
    )

}
    
export default PlayerCard
    