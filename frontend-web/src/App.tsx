import { Suspense, useEffect, useState } from 'react';
import LogInPage from '@/pages/LogInPage/LogInPage';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';
import MainPage from '@/pages/MainPage/MainPage';

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('accessToken'));

  // localStorage 값이 변경될 때마다 상태 업데이트
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLogin(localStorage.getItem('accessToken'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  });

  return (
    <Suspense fallback={<LoadingPage></LoadingPage>}>
      <>
        {!isLogin && <LogInPage />}
        {isLogin && <MainPage />}
      </>
    </Suspense>
  );
}

export default App;
