import { useNavigate, useLocation } from 'react-router-dom';
import { StyledAdminBar } from '../AdminBar/AdminBar.style';
import { PATH } from '@/constants/path';

const tabBarInfo = [
  { text: 'FAQ', path: PATH.FAQ },
  { text: '문의사항', path: PATH.QUESTION },
  { text: '데이터 복구', path: PATH.RESTORE },
];

export default function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigatePage = (path: string) => {
    navigate(path);
  };

  return (
    <StyledAdminBar>
      {tabBarInfo.map(({ text, path }) => (
        <div
          key={path}
          onClick={() => navigatePage(path)}
          style={{
            color: location.pathname === path ? 'blue' : 'grey',
            cursor: 'pointer',
            height: '52px',
          }}
        >
          {text}
        </div>
      ))}
    </StyledAdminBar>
  );
}
