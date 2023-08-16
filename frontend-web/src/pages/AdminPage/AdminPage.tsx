import { Outlet, Link } from 'react-router-dom';
import {
  AdminContainer,
  Header,
  HeaderImg,
  HeaderTitle,
} from '@/pages/AdminPage/AdminPage.style';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';

const AdminPage = () => {
  return (
    <AdminContainer>
      <Header>
        <HeaderImg>
          <Link to={`/main/mypage`}>
            <img
              src={require(`@/assets/images/icon-arrow-left-grey.png`)}
              alt=""
            />
          </Link>
        </HeaderImg>
        <HeaderTitle>관리자 페이지</HeaderTitle>
        <HeaderImg></HeaderImg>
      </Header>
      <AdminBar />
      <Outlet />
    </AdminContainer>
  );
};

export default AdminPage;
