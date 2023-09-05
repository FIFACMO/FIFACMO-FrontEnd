// Components
import PlayerCard from '@/component/PlayerCard/PlayerCard';
import InputText from '@/component/InputText/InputText';

// Images
import Netherlands from '@/assets/img/holanda.png';
import Gullit from '@/assets/img/gullit.jpg';
import TeamLogo from '@/assets/img/palmeiras.png';

// Styles
import {
  Market_Container
} from './styles';

function MarketPage() {

  return (
    <Market_Container>

      <InputText />
      <PlayerCard 
        overall={95} 
        teamImg={TeamLogo} 
        countryFlag={Netherlands} 
        playerImg={Gullit}
        name="Schweinsteigerfdas"
        position="ATA"
        age={35} 
        height="1,90" 
        weight="90"
        transferValue={120200000}  
      />
      
    </Market_Container>
  )
  
}
  
  export default MarketPage
  