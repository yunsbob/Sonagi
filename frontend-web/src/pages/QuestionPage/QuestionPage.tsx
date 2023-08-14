import { useState, useEffect } from 'react';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { Link, Outlet } from 'react-router-dom';
import { Question } from '@/types';
import { instance } from '@/apis/instance';

const QuestionPage = () => {
  const [currentPost, setCurrentPost] = useState<Question[]>([]);

  const getQuestionList = async () => {
    try {
      const response = await instance.get(`/questions`);
      return response.data;
    } catch (error) {
      throw new Error('no data returned from the API - 문의사항');
    }
  };

  useEffect(() => {
    getQuestionList()
      .then(questionList => {
        setCurrentPost([...questionList].reverse());
      })
      .catch(error => {
        console.error('문의사항 데이터 가져오기 실패:', error);
      });
  }, []);
  return (
    <Background $background={orangeBackground}>
      <div>문의사항</div>
      <AdminBar />
      <Outlet />
      <div className="questionList-list">
        <table>
          <colgroup>
            <col width="15%" />
            <col width="40%" />
            <col width="15%" />
            <col width="30%" />
          </colgroup>

          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>사용자ID</th>
              <th>등록일</th>
            </tr>
          </thead>

          <tbody>
            {currentPost.map((questionListItem, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="title">
                  <Link to={`/admin/question/${questionListItem.questionId}`}>
                    {questionListItem.title}
                  </Link>
                </td>
                <td>{questionListItem.userId}</td>
                <td>{questionListItem.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Background>
  );
};

export default QuestionPage;
