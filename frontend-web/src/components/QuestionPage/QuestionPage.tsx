import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Question } from '@/types';
import axios from 'axios';

const QuestionPage = () => {
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [currentPost, setCurrentPost] = useState<Question[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/questions')
      .then(response => {
        setQuestionList([...response.data].reverse());
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setCurrentPost(questionList);
  }, [questionList]);

  return (
    <Background $background={orangeBackground}>
      <div>문의사항</div>
      <AdminBar />
      <Outlet />
      <div className="faq-list">
        <table>
          <colgroup>
            <col width="15%" />
            <col width="30%" />
            <col width="15%" />
            <col width="40%" />
          </colgroup>

          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자ID</th>
              <th>등록일</th>
            </tr>
          </thead>

          <tbody>
            {currentPost.map((questionList, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="title">
                  <Link to={`/admin/question/${questionList.id}`}>
                    {questionList.title}
                  </Link>
                </td>
                <td>{questionList.userId}</td>
                <td>{questionList.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Background>
  );
};

export default QuestionPage;
