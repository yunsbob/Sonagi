import { Outlet } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import TabBar from '@/components/molecules/TabBar/TabBar';
import BabyBar from '@/components/molecules/BabyBar/BabyBar';
import { Suspense, useEffect } from 'react';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/userState';

const MainPage = () => {
  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    if (window.ReactNativeWebView && userInfo.userId) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: 'userId',
          code: userInfo.userId,
        })
      );
    }
    console.log('isReactNative', userInfo.userId);
  }, [userInfo.userId]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Background $background={backgroundGradient}>
        <header>
          <BabyBar></BabyBar>
        </header>
        {/* <Suspense fallback={<LoadingPage />}> */}
        <Outlet />
        {/* </Suspense> */}
        <TabBar />
      </Background>
    </Suspense>
  );
};

export default MainPage;
