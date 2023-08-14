import { useState, useEffect } from 'react';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import { instance } from '@/apis/instance';

const QuestionDetailPage = () => {
  const questionID = useParams().id;
  const navigate = useNavigate();
  // state
  const [detailQuestionData, setDetailQuestionData] = useState<any>([]);

  useEffect(() => {
    instance
      .get(`/questions/${questionID}`)
      .then(response => {
        setDetailQuestionData(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, [questionID]);

  return (
    <Background $background={orangeBackground}>
      <div>문의사항</div>
      <div className="question-detail">
        <div className="question-wrapper">
          <div className="question-header">
            <p>번호 : {detailQuestionData.questionId}</p>
          </div>
          <div className="question-user">
            <p>사용자 ID : {detailQuestionData.userId}</p>
          </div>
          <div className="question-title">
            <p>제목 : {detailQuestionData.title}</p>
          </div>
          <div className="question-content">
            <p>내용 : {detailQuestionData.content}</p>
          </div>
        </div>

        <div className="grid-2">
          <Link to={`/admin/question`}>
            <button>목록</button>
          </Link>
        </div>
      </div>
      <AdminBar />
      <Outlet />
    </Background>
  );
};

export default QuestionDetailPage;
