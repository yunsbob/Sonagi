import { Outlet } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import TabBar from '@/components/molecules/TabBar/TabBar';
import BabyBar from '@/components/molecules/BabyBar/BabyBar';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';

const MainPage = () => {
  return (
    <Background $background={backgroundGradient}>
      <header>
        <BabyBar></BabyBar>
        <CalendarBar></CalendarBar>
      </header>

      <Outlet />
      <TabBar />
    </Background>
  );
};

export default MainPage;
