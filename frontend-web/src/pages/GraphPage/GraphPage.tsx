import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import { PATH } from '@/constants/path';
import theme from '@/styles/theme';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const GraphPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const AllCategoryButton = document.getElementById('All');
    AllCategoryButton!.style.display = 'none';
  }, []);

  const childPath = [
    { name: '일별 그래프', path: PATH.GRAPHBYDAY },
    { name: '주별 그래프', path: PATH.GRAPHBYWEEK },
  ];

  const onClickGraphToggle = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <section>
        <CalendarBar></CalendarBar>
        <CategoryBar></CategoryBar>
        {childPath.map(child => {
          return (
            <Button
              variant="gender"
              size="small"
              key={child.path}
              onClick={() => onClickGraphToggle(child.path)}
            >
              {child.name}
            </Button>
          );
        })}
      </section>
      <Outlet />
    </>
  );
};

export default GraphPage;
