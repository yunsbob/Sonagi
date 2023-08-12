import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledTabBar } from '../TabBar/TabBar.style';
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
    <StyledTabBar>
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
    </StyledTabBar>
  );
}
