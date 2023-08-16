import { Outlet, useNavigate } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import TabBar from '@/components/molecules/TabBar/TabBar';
import BabyBar from '@/components/molecules/BabyBar/BabyBar';
import { Suspense, useEffect } from 'react';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/userState';
import { getBaby } from '@/apis/Baby/babyAPI';
import { PATH } from '@/constants/path';

const MainPage = () => {
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate();
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

  // useEffect(() => {
  //   // 이름이 없어? 그럼 이름 입력해야지.
  //   //
  //   const checkBabies = async (userId: number) => {
  //     const babyInfos = await getBaby(userId);
  //     if (babyInfos?.length === 0) {
  //       navigate(PATH.REGISTER);
  //     }
  //   };

  //   checkBabies(userInfo.userId);
  // }, [userInfo]);

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
