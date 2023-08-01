import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import { PATH } from '@/constants/path';
import LogInPage from '@/pages/LogInPage/LogInPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import SignInPage from '@/pages/SignInPage/SignInPage';

// footer
import MainPage from '@/pages/MainPage/MainPage';
import GraphPage from '@/pages/GraphPage/GraphPage';
import OurBabyPage from '@/pages/OurBabyPage/OurBabyPage';
import DiaryPage from '@/pages/DiaryPage/DiaryPage';
import MyPagePage from '@/pages/MyPagePage/MyPagePage';
import RecordPage from '@/pages/RecordPage.tsx/RecordPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import BabyCodePage from '@/pages/BabyCodePage/BabyCodePage';

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: PATH.LOGIN,
    element: <LogInPage />,
  },
  {
    path: PATH.SIGNIN,
    element: <SignInPage />,
  },
  {
    path: PATH.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: PATH.BABYCODE,
    element: <BabyCodePage />,
  },
  {
    path: PATH.MAIN,
    element: <MainPage />,
    children: [
      { index: true, element: <RecordPage /> },
      { path: 'graph', element: <GraphPage /> },
      { path: 'ourBaby', element: <OurBabyPage /> },
      { path: 'diary', element: <DiaryPage /> },
      { path: 'myPage', element: <MyPagePage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
