import { Outlet, useNavigate } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import TabBar from '@/components/molecules/TabBar/TabBar';
import BabyBar from '@/components/molecules/BabyBar/BabyBar';
import { Suspense, useEffect } from 'react';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/userState';
import { PATH } from '@/constants/path';
import { babiesOfUserState } from '@/states/babyState';

const MainPage = () => {
  const userInfo = useRecoilValue(userInfoState);
  const babies = useRecoilValue(babiesOfUserState);
  const navigate = useNavigate();
  // 웹뷰에 id 전송 로직
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

  // 아기 유무 체킹
  useEffect(() => {
    // const checkBabies = async (userId: number) => {
    //   const babyInfos = await getBaby(userId);
    //   if (babyInfos?.length === 0) {
    //     navigate(PATH.REGISTER);
    //   }
    // };

    // checkBabies(userInfo.userId);
    if (babies?.length === 0) {
      navigate(PATH.REGISTER);
    }
  }, [babies, navigate]);

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
