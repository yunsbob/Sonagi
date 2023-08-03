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
  console.log('리다이렉트 페이지 왔다');
<<<<<<< HEAD
  const navigator = useNavigate();
  // const params = useParams();

  // localStorage.clear();
  // localStorage.setItem('accessToken', params.token!);

  const params = new URLSearchParams(location.search);

=======
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const params = new URLSearchParams(location.search);
>>>>>>> 0db85ac39c54a2f66077fdab1b61a6f324ef3e90
  const accessToken = params.get('accessToken');

  localStorage.setItem('accessToken', accessToken!);

<<<<<<< HEAD
  // navigator(PATH.SIGNIN);
=======
  setUserInfo(
    produce(draft => {
      draft.userId = parseInt(
        jwt<JwtProps>(localStorage.getItem('accessToken')!).sub
      );
    })
  );

>>>>>>> 0db85ac39c54a2f66077fdab1b61a6f324ef3e90
  window.location.href = PATH.SIGNIN;

  return <></>;
};

export default RedirectPage;
