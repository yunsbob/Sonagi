import { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import { instance } from '@/apis/instance';
import {
  ButtonContainer,
  FAQButton,
  FAQContentContainer,
  FAQDetailContent,
  FAQDetailTitle,
  FAQListContainer,
} from './FAQPage.style';

const FAQDetailPage = () => {
  const faqId = useParams().id;
  const navigate = useNavigate();
  const [detailFAQData, setDetailFAQData] = useState<any>([]);

  useEffect(() => {
    instance
      .get(`/faqs/${faqId}`)
      .then(response => {
        setDetailFAQData(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, [faqId]);

  const deleteFAQ = async () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      try {
        await instance.delete(`/faqs/${faqId}`);
        alert('게시글이 삭제되었습니다.');
        navigate('/admin/faq');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <FAQListContainer>
      <FAQContentContainer>
        <FAQDetailTitle>
          <p>{detailFAQData.title}</p>
        </FAQDetailTitle>
        <FAQDetailContent>
          <p>{detailFAQData.content}</p>
        </FAQDetailContent>
      </FAQContentContainer>
      <ButtonContainer>
        <FAQButton>
          <Link to={`/admin/faq/modify/${detailFAQData.faqId}`}>수정</Link>
        </FAQButton>
        <FAQButton onClick={deleteFAQ}>삭제</FAQButton>
        <FAQButton>
          <Link to={`/admin/faq`}>목록</Link>
        </FAQButton>
      </ButtonContainer>
      <Outlet />
    </FAQListContainer>
  );
};

export default FAQDetailPage;
