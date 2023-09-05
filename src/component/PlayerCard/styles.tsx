import styled from 'styled-components'
import { themeS } from '@/consts/theme';
import { Tooltip } from 'react-tooltip';


export const PlayerCard_Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
    
    height: 100%;
    width: 100%;

    overflow: auto;
`

export const PlayerCard_Wrapper = styled.div`
    display: flex;
    flex: 0 0 240px; // needs to alter flex property to the same PlayerCard_Fix too to work here
    align-items: center;
    flex-direction: column;
    
    height: 340px;
    min-width: 0;
    
    border-radius: 10px;

    background-color: ${themeS.mainTheme.colorMainBold};
    
`

export const PlayerCard_Fix = styled.div`
    flex: 0 0 300px; // needs to alter flex property to the same PlayerCard_Wrapper too to work here

    height: 0;
    width: 200px;
`


//----------------------------------------------------------------
// First Section
// Is player overall and team logo or nothing if does't have any team 
//----------------------------------------------------------------


export const PlayerCard_FirstSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 90%;
    height: 40px;

    margin: 10px 0;
`

export const PlayerCard_Team = styled.img`
    height: 55px;
`


//----------------------------------------------------------------
// Second Section
// Second section is player image and country image
//----------------------------------------------------------------


export const PlayerCard_SecondSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 40%;

    margin-top: -27px;

`

export const PlayerCard_PlayerImg = styled.img`
    height: 75%;

    border-radius: 100%;
`

export const PlayerCard_CountryFlag = styled.img`
    height: 18%;

    margin-top: -10px;
`


//----------------------------------------------------------------
// Third Section
// Third section is player name, position, age, height and weight
//----------------------------------------------------------------


export const PlayerCard_ThirdSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;

    margin-top: -8px;
`

export const PlayerCard_PlayerName = styled.h2`
    width: 90%;
    overflow: hidden;
    white-space: nowrap;

    font-size: 1.7rem;
    font-family: 'InterBold';
    text-overflow: ellipsis;

    color: ${themeS.mainTheme.colorWhite};
`

export const PlayerCard_PlayerInfo = styled.p`
    margin-top: 8px;

    font-family: 'InterLight';
    font-size: 0.7rem;
    text-align: center;
    color: ${themeS.mainTheme.colorMainLight};
`

export const PlayerCard_PlayerValue = styled.strong`
    width: 85%;

    margin-top: 14px;

    padding: 13px 10px;

    border-radius: 5px;

    font-family: 'InterBold';
    font-size: 1.2rem;
    text-align: center;
    color: ${themeS.mainTheme.colorWhite};
    background-color: ${themeS.mainTheme.colorMainMedium};
`

export const PlayerCard_PlayerTooltip = styled(Tooltip)`
    font-family: 'InterBold';
    font-size: 0.6rem;
    color: ${themeS.mainTheme.colorWhite};

    background-color: ${themeS.mainTheme.colorMainMedium};
`

//----------------------------------------------------------------
// Fourth Section
// Fourth section is action buttons, informations, favorite and offer proposal
//----------------------------------------------------------------

export const PlayerCard_FourthSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 85%;

    margin-top: 12px;
`