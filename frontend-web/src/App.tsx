import React, { Suspense } from 'react';
import LogInPage from '@/pages/LogInPage/LogInPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      {/* TODO: 로그인 여부에 따라 login 페이지 or 메인화면 보여주기 */}
      <LogInPage />
    </Suspense>
  );
}

export default App;
