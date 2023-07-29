import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import { PATH } from '@/constants/path';
import LogInPage from '@/pages/LogInPage/LogInPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import SignInPage from '@/pages/SignInPage/SignInPage';

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
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
