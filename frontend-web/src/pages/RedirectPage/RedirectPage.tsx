import { PATH } from '@/constants/path';
import { userInfoState } from '@/states/userState';
import { produce } from 'immer';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import jwt from 'jwt-decode';
import { getUserName } from '@/apis/User/userAPI';
import { getBaby } from '@/apis/Baby/babyAPI';

interface JwtProps {
  auth: string;
  exp: number;
  sub: string;
}

const RedirectPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const params = new URLSearchParams(location.search);
  const accessToken = params.get('accessToken');

  localStorage.setItem('accessToken', accessToken!);

  setUserInfo(
    produce(draft => {
      draft.userId = parseInt(
        jwt<JwtProps>(localStorage.getItem('accessToken')!).sub
      );
    })
  );

  const checkRedirect = async () => {
    const nameDto = await getUserName(userInfo.userId);
    const babyList = await getBaby(userInfo.userId);
    if (!nameDto.name || nameDto.name === '') {
      window.location.href = PATH.SIGNIN;
    }
    if (babyList.length !== 0) {
      window.location.href = PATH.MAIN;
    }
    window.location.href = PATH.REGISTER;
  };
  checkRedirect();

  return <></>;
};

export default RedirectPage;
