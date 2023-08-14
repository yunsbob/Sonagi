import { useState } from 'react';
import { userInfoState } from '@/states/userState';
import { useRecoilValue } from 'recoil';
import { instance } from '@/apis/instance';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  AdminButtonContainer,
  AdminButton,
  ContentContainer,
  DetailContent,
  DetailTitle,
  ListContainer,
} from '../AdminPage/AdminPage.style';
const FAQCreatePage = () => {
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const formSubmit = async () => {
    if (title.length === 0) {
      alert('제목을 입력해 주세요.');
    } else if (content.length === 0) {
      alert('내용을 입력해 주세요.');
    } else {
      instance
        .post('http://localhost:8080/api/faqs', {
          userId: userInfo.userId,
          title: title,
          content: content,
        })
        .then(function () {
          navigate('/admin/faq');
        })

        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const formCancel = async () => {
    if (window.confirm('게시글 작성을 취소하시겠습니까?')) {
      navigate('/admin/faq');
    } else {
      return false;
    }
  };
  return (
    <ListContainer>
      <ContentContainer>
        <div>FAQ 작성</div>
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

export default FAQCreatePage;
