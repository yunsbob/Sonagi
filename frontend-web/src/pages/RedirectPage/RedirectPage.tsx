import { PATH } from '@/constants/path';
import { userInfoState } from '@/states/userState';
import { produce } from 'immer';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import jwt from 'jwt-decode';
import { getUserName } from '@/apis/User/userAPI';
import { getBaby } from '@/apis/Baby/babyAPI';
import { babiesOfUserState } from '@/states/babyState';

interface JwtProps {
  auth: string;
  exp: number;
  sub: string;
}

const RedirectPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [babiesOfUser, setBabiesOfUser] = useRecoilState(babiesOfUserState);
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

  // useEffect(()=>{

  // }[userInfo])

  const checkRedirect = async () => {
    const nameDto = await getUserName(userInfo.userId);
    const babyList = await getBaby(userInfo.userId);

    const newUserInfoForNameUpdate = produce(userInfo, draft => {
      draft.name = nameDto.name;
    });
    const newBabiesOfUser = produce(babiesOfUser, draft => {
      draft.length = 0;
      draft.push(...babyList);
    });

    if (!nameDto.name || nameDto.name === '') {
      window.location.href = PATH.SIGNIN;
    }

    alert('이름 있음');
    setUserInfo(newUserInfoForNameUpdate);

    if (babyList.length === 0) {
      window.location.href = PATH.REGISTER;
    }

    setBabiesOfUser(newBabiesOfUser);
    window.location.href = PATH.MAIN;
  };

  checkRedirect();
  return <></>;
};

export default RedirectPage;
