import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import { PATH } from '@/constants/path';
import { Outlet } from 'react-router-dom';

const GraphPage = () => {
  const childPath = [
    { name: '일별 그래프', path: PATH.GRAPHBYDAY },
    { name: '주별 그래프', path: PATH.GRAPHBYWEEK },
  ];

  return (
    <>
      <section>
        <CalendarBar></CalendarBar>
        <CategoryBar></CategoryBar>
        {childPath.map(child => {
          return (
            <Button variant="gender" size="small" key={child.path}>
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
