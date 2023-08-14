import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Link, Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
    <Background $background={orangeBackground}>
      <div>어드민</div>
      <p>
        <Link to={`/main/myPage`}>
          <button>마이페이지</button>
        </Link>
      </p>
      <p>
        <Link to={`/admin/faq`}>
          <button>FAQ</button>
        </Link>
      </p>
      <p>
        <Link to={`/admin/question`}>
          <button>문의사항</button>
        </Link>
      </p>
      <p>
        <Link to={`/admin/restore`}>
          <button>아이 데이터 복구</button>
        </Link>
      </p>
      <Outlet />
    </Background>
  );
};

export default AdminPage;
