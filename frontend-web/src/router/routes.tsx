import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import { PATH } from '@/constants/path';
import LogInPage from '@/pages/LogInPage/LogInPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import SignInPage from '@/pages/SignInPage/SignInPage';

// footer
import MainPage from '@/pages/MainPage/MainPage';
import RecordPage from '@/pages/RecordPage/RecordPage';
import GraphPage from '@/pages/GraphPage/GraphPage';
import OurBabyPage from '@/pages/OurBabyPage/OurBabyPage';
import OurBabyVaccinationPage from '@/pages/OurBabyVaccinationPage/OurBabyVaccinationPage';
import DiaryPage from '@/pages/DiaryPage/DiaryPage';
import DiaryRegister from '@/pages/DiaryRegisterPage/DiaryRegisterPage';
import MyPagePage from '@/pages/MyPagePage/MyPagePage';
import RegisterBabyProfilePage from '@/pages/RegisterBabyProfilePage/RegisterBabyProfilePage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import BabyCodePage from '@/pages/BabyCodePage/BabyCodePage';
import { GraphByDay } from '@/components/organisms/GraphByDay/GraphByDay';
import { GraphByWeek } from '@/components/organisms/GraphByWeek/GraphByWeek';
import RedirectPage from '@/pages/RedirectPage/RedirectPage';
import { DetailRecordPage } from '@/pages/DetailRecordPage/DetailRecordPage';
import AlarmPage from '@/pages/AlarmPage/AlarmPage';
import UpdateBabyProfilePage from '@/pages/UpdateBabyProfilePage/UpdateBabyProfilePage';
import AdminPage from '@/pages/AdminPage/AdminPage';
import FAQPage from '@/pages/FAQPage/FAQPage';
import FAQCreatePage from '@/pages/FAQPage/frontend-web/src/pages/FAQPage/FAQCreatePage';
import FAQDetailPage from '@/pages/FAQPage/FAQDetailPage';
import FAQModifyPage from '@/pages/FAQPage/FAQModifyPage';
import RestorePage from '@/pages/RestorePage/frontend-web/src/pages/RestorePage/RestorePage';
import QuestionPage from '@/pages/QuestionPage/QuestionPage';
import QuestionDetailPage from '@/pages/QuestionPage/QuestionDetailPage';

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
    path: PATH.REDIRECT,
    element: <RedirectPage />,
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
    path: PATH.REGISTERBABYPROFILE,
    element: <RegisterBabyProfilePage />,
  },
  {
    path: PATH.BABYCODE,
    element: <BabyCodePage />,
  },
  {
    path: PATH.UPDATEBABYPROFILE,
    element: <UpdateBabyProfilePage />,
  },
  {
    path: PATH.MAIN,
    element: <MainPage />,
    children: [
      { index: true, element: <RecordPage /> },
      {
        path: 'graph',
        element: <GraphPage />,
        children: [
          { index: true, element: <GraphByDay /> },
          { path: 'week', element: <GraphByWeek /> },
        ],
      },
      { path: 'ourBaby', element: <OurBabyPage /> },
      { path: 'ourBaby/vaccination', element: <OurBabyVaccinationPage /> },
      { path: 'diary', element: <DiaryPage /> },
      { path: 'diaryRegister', element: <DiaryRegister /> },
      { path: 'myPage', element: <MyPagePage /> },
      { path: 'alarm', element: <AlarmPage /> },
      { path: 'detailRecord', element: <DetailRecordPage /> },
    ],
  },
  {
    path: PATH.ADMIN,
    element: <AdminPage />,
  },
  {
    path: PATH.ADMIN,
    children: [
      { path: 'faq', element: <FAQPage /> },
      { path: 'faq/:id', element: <FAQDetailPage /> },
      { path: 'faq/modify/:id', element: <FAQModifyPage /> },
      { path: 'faq/create', element: <FAQCreatePage /> },
      { path: 'question', element: <QuestionPage /> },
      { path: 'question/:id', element: <QuestionDetailPage /> },
      { path: 'restore', element: <RestorePage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
