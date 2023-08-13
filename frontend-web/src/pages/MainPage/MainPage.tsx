import { Outlet } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import TabBar from '@/components/molecules/TabBar/TabBar';
import BabyBar from '@/components/molecules/BabyBar/BabyBar';
import { Suspense } from 'react';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';
import Cookies from 'js-cookie';

const MainPage = () => {
  const saveAndroidTokenToCookie = () => {
    // React Native 알림을 위한 기기 Token값 저장
    console.log('hi1');
    document.addEventListener('message', (e: any) => {
      console.log('hi2');
      const androidToken = e.data;
      console.log(androidToken);

      if (androidToken) {
        console.log('saveToken');
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60);

        Cookies.set('androidToken', androidToken, {
          path: '/',
          expires: expires,
          secure: true,
          // httpOnly: true,
        });
      }
    });
  };
  saveAndroidTokenToCookie();

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
