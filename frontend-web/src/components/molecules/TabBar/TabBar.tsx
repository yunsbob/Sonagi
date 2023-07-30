import { Image } from '@/components/atoms/Image/Image';
import { useNavigate, useLocation } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { StyledTabBar } from './TabBar.style';

// 탭바 비활성화 이미지
import tabBarRecordGrey from '@/assets/images/tabbar-record-grey.png';
import tabBarDiaryGrey from '@/assets/images/tabbar-diary-grey.png';
import tabBarGraphGrey from '@/assets/images/tabbar-graph-grey.png';
import tabBarMyPageGrey from '@/assets/images/tabbar-mypage-grey.png';
import tabBarOurBabyGrey from '@/assets/images/tabbar-ourbaby-grey.png';
// 탭바 활성화 이미지
import tabBarRecordBlue from '@/assets/images/tabbar-record-blue.png';
import tabBarDiaryBlue from '@/assets/images/tabbar-diary-blue.png';
import tabBarGraphBlue from '@/assets/images/tabbar-graph-blue.png';
import tabBarMyPageBlue from '@/assets/images/tabbar-mypage-blue.png';
import tabBarOurBabyBlue from '@/assets/images/tabbar-ourbaby-blue.png';

const tabBarInfo = [
  { src: [tabBarRecordGrey, tabBarRecordBlue], path: PATH.MAIN },
  { src: [tabBarGraphGrey, tabBarGraphBlue], path: PATH.GRAPH },
  { src: [tabBarOurBabyGrey, tabBarOurBabyBlue], path: PATH.OURBABY },
  { src: [tabBarDiaryGrey, tabBarDiaryBlue], path: PATH.DIARY },
  { src: [tabBarMyPageGrey, tabBarMyPageBlue], path: PATH.MYPAGE },
];

export default function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledTabBar>
      {tabBarInfo.map(({ src, path }) => (
        <Image
          key={path}
          src={location.pathname === path ? src[1] : src[0]}
          onClick={() => navigate(path)}
          height={52}
          $unit="px"
        />
      ))}
    </StyledTabBar>
  );
}
