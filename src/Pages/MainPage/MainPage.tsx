import MarketPage from '../../Pages/MarketPage/MarketPage.tsx'
import NavigationBar from '../../component/NavigationBar/NavigationBar.tsx'

import {
  FIFACMO_Container,
  FIFACMO_Wrapper
} from './styles.tsx';

function MainPage() {

  return (
    <FIFACMO_Container>
      <FIFACMO_Wrapper>
        <NavigationBar />
        <MarketPage />
      </FIFACMO_Wrapper>
    </FIFACMO_Container>
  )
}

export default MainPage
