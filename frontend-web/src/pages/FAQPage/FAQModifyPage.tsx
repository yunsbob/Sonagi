import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { instance } from '@/apis/instance';

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

  const formSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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

  const formCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (window.confirm('게시글 수정을 취소하시겠습니까?')) {
      navigate('/admin/faq');
    }
  };

  return (
    <Background $background={orangeBackground}>
      <div>faq 수정</div>
      <div className="board-modify">
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
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="내용을 입력해주세요."
            />
          </div>
        </form>

        <div className="grid-3">
          <button onClick={formSubmit}>수정</button>
          <button onClick={formCancel}>취소</button>
        </div>
      </div>
      <AdminBar />
      <Outlet />
    </Background>
  );
};

export default FAQModifyPage;
