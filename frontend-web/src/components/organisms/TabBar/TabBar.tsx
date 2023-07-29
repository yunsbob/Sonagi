// import { Image } from '@/components/atoms/Image/Image';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

export default function TabBar() {
  const navigate = useNavigate();

  const goToMain = () => navigate('/main');
  const goToGraph = () => navigate('/main/graph');
  const goToOurBaby = () => navigate('/main/ourBaby');
  const goToDiary = () => navigate('/main/diary');
  const goToMyPage = () => navigate('/main/myPage');

  return (
    <nav>
      <button onClick={goToMain}>record</button>
      <button onClick={goToGraph}>graph</button>
      <button onClick={goToOurBaby}>ourBaby</button>
      <button onClick={goToDiary}>diary</button>
      <button onClick={goToMyPage}>myPage</button>
    </nav>
  );
}
