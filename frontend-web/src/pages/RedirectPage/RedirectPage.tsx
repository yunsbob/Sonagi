import { PATH } from '@/constants/path';
import { userInfoState } from '@/states/UserState';
import { produce } from 'immer';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import jwt from 'jwt-decode';

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

  window.location.href = PATH.SIGNIN;

  return <></>;
};

export default RedirectPage;
