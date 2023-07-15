import styled from 'styled-components'
import { themeS } from '@/consts/theme';

export const FIFACMO_Container = styled.div`
    display: flex;
    flex-direction: row;
    
    height: 100vh;
    width: 100vw;

    background-color: ${themeS.mainTheme.colorMainMedium};
`

export const FIFACMO_Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: center;
    /* gap: 20px; */
    
    height: 100%;
    width: 100%;
`