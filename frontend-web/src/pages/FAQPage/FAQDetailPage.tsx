import { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';

const FAQDetailPage = () => {
  const params = useParams().id;
  const navigate = useNavigate();

  // state
  const [detailFAQData, setDetailFAQData] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/faqs/${params}`)
      .then(response => {
        setDetailFAQData(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, [params]);

  const deleteFAQ = async () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      try {
        await axios.delete(`http://localhost:8080/api/faqs/${params}`);
        alert('게시글이 삭제되었습니다.');
        navigate('/admin/faq');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Background $background={orangeBackground}>
      <div>faq detail</div>
      <div className="faq-detail">
        <div className="faq-wrapper">
          <div className="faq-header">
            <p>번호 : {detailFAQData.id}</p>
          </div>

          <div className="faq-title">
            <p>제목 : {detailFAQData.title}</p>
          </div>
          <div className="faq-content">
            <p>내용 : {detailFAQData.content}</p>
          </div>
        </div>

        <div className="grid-2">
          <Link to={`/admin/faq/modify/${detailFAQData.id}`}>
            <button>수정</button>
          </Link>
          <button onClick={deleteFAQ}>삭제</button>
          <Link to={`/admin/faq`}>
            <button>목록</button>
          </Link>
        </div>
      </div>
      <AdminBar />
      <Outlet />
    </Background>
  );
};

export default FAQDetailPage;
