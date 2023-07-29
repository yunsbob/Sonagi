import { Outlet } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import TabBar from '@/components/organisms/TabBar/TabBar';

const MainPage = () => {
  return (
    <Background background={backgroundGradient}>
      <div style={{ backgroundColor: 'white' }}>
        <header>
          <Text size="medium1">(임시) 이지은 // 이지금</Text>
        </header>
      </div>
      <Outlet />
      <TabBar />
    </Background>
  );
};

export default MainPage;
