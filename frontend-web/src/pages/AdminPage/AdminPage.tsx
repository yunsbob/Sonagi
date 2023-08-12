import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
    <Background $background={orangeBackground}>
      <div>어드민</div>
      <AdminBar />
      <Outlet />
    </Background>
  );
};

export default AdminPage;
