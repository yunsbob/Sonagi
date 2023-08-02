import { PATH } from '@/constants/path';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RedirectPage = () => {
  console.log('리다이렉트 페이지 왔다');
  const navigator = useNavigate();
  const params = useParams();

  localStorage.clear();
  localStorage.setItem('accessToken', params.token!);
  navigator(PATH.SIGNIN);

  return <></>;
};

export default RedirectPage;
