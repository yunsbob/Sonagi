import { Outlet } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import TabBar from '@/components/molecules/TabBar/TabBar';
import BabyBar from '@/components/molecules/BabyBar/BabyBar';
import { Suspense } from 'react';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';

const MainPage = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Background $background={backgroundGradient}>
        <header>
          <BabyBar></BabyBar>
        </header>
        <Outlet />
        <TabBar />
      </Background>
    </Suspense>
  );
};

export default MainPage;
