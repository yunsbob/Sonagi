import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Link, Outlet } from 'react-router-dom';
import Button from '@/components/atoms/Button/Button';
import {
  AdminContainer,
  Header,
  ContentController,
} from '@/pages/AdminPage/AdminPage.style';
import { Text } from '@/components/atoms/Text/Text.styles';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';

const AdminPage = () => {
  return (
    <AdminContainer>
      <Header>
        관리자 페이지
        {/* <Link to={`/main/mypage`}>
          <button>
            <img src="@/assets/images/icon-arrow-left-grey.png" alt="" />
          </button>
        </Link> */}
      </Header>
      <AdminBar />

      <ContentController>
        <div>content</div>
      </ContentController>

      <Outlet />
    </AdminContainer>
  );
};

export default AdminPage;
