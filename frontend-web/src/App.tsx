import React, { Suspense } from 'react';
import LogInPage from '@/pages/LogInPage/LogInPage';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';

function App() {
  return (
    <Suspense fallback={<LoadingPage></LoadingPage>}>
      {/* TODO: 로그인 여부에 따라 login 페이지 or 메인화면 보여주기 */}
      <LogInPage />
    </Suspense>
  );
}

export default App;
