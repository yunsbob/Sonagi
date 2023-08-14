import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Link, Outlet } from 'react-router-dom';
import Button from '@/components/atoms/Button/Button';
import { AdminContainer, Header } from '@/pages/AdminPage/AdminPage.style';
import { Text } from '@/components/atoms/Text/Text.styles';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';

const AdminPage = () => {
  return (
    <AdminContainer>
      <Header>관리자 페이지</Header>
      <AdminBar />

      <Outlet />
    </AdminContainer>
  );
};

export default AdminPage;
