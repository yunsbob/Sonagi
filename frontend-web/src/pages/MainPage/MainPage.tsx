import { Outlet } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import TabBar from '@/components/organisms/TabBar/TabBar';
import BabyBar from '@/components/molecules/BabyBar/BabyBar';

const MainPage = () => {
  return (
    <Background background={backgroundGradient}>
      <div style={{ backgroundColor: 'white' }}>
        <header>
          <BabyBar></BabyBar>
        </header>
      </div>
      <Outlet />
      <TabBar />
    </Background>
  );
};

export default MainPage;
