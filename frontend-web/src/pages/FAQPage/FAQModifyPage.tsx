import { useState, useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { instance } from '@/apis/instance';
import {
  AdminButtonContainer,
  AdminButton,
  ContentContainer,
  DetailContent,
  DetailTitle,
  ListContainer,
} from '../AdminPage/AdminPage.style';

const FAQModifyPage = () => {
  const faqId = useParams().id;
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (faqId) {
      instance
        .get(`/faqs/${faqId}`)
        .then(response => {
          setTitle(response.data.title);
          setContent(response.data.content);
        })
        .catch(function (error) {
          navigate('/error/404');
          console.log(error);
        });
    }
  }, [faqId, navigate]);

  const formSubmit = async () => {
    if (title.length === 0) {
      alert('제목을 입력해 주세요.');
    } else if (content.length === 0) {
      alert('내용을 입력해 주세요.');
    } else {
      if (window.confirm('게시글을 수정하시겠습니까?')) {
        try {
          await instance.put(`/faqs`, {
            faqId: faqId,
            title: title,
            content: content,
          });
          alert('게시글이 수정되었습니다.');
          navigate('/admin/faq');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const formCancel = async () => {
    if (window.confirm('게시글 수정을 취소하시겠습니까?')) {
      navigate('/admin/faq');
    }
  };

  return (
    <ListContainer>
      <ContentContainer>
        <div>FAQ 수정</div>
        <form>
          <DetailTitle>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요."
            />
          </DetailTitle>

          <DetailContent>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="내용을 입력해주세요."
            />
          </DetailContent>
        </form>

        <AdminButtonContainer>
          <AdminButton onClick={formSubmit}>수정</AdminButton>
          <AdminButton onClick={formCancel}>취소</AdminButton>
        </AdminButtonContainer>
        <Outlet />
      </ContentContainer>
    </ListContainer>
  );
};

export default FAQModifyPage;
