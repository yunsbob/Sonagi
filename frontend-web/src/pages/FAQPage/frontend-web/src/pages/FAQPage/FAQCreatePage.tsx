import React, { useState } from 'react';
import axios from 'axios';
import { userInfoState } from '@/states/userState';
import { useRecoilValue } from 'recoil';
import { useNavigate, Outlet } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
const FAQCreatePage = () => {
  // hook
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  // state
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const formSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (title.length === 0) {
      alert('제목을 입력해 주세요.');
    } else if (content.length === 0) {
      alert('내용을 입력해 주세요.');
    } else {
      axios
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
  const formCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (window.confirm('게시글 작성을 취소하시겠습니까?')) {
      navigate('/admin/faq');
    } else {
      return false;
    }
  };
  return (
    <Background $background={orangeBackground}>
      <div>FAQ 작성</div>
      <div className="faq-create">
        <form>
          <div>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요."
            />
          </div>

          <div>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="내용을 입력해주세요."
            />
          </div>
        </form>

        <div className="grid-2">
          <button onClick={formSubmit}>등록</button>
          <button onClick={formCancel}>취소</button>
        </div>
      </div>
      <AdminBar />
      <Outlet />
    </Background>
  );
};

export default FAQCreatePage;
