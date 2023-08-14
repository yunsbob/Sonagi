import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { useEffect, useState } from 'react';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { Outlet } from 'react-router-dom';
import { DeletedBaby } from '@/types';
import { instance } from '@/apis/instance';

const RestorePage = () => {
  const [deletedBabyList, setDeletedBabyList] = useState<DeletedBaby[]>([]);
  const [currentPost, setCurrentPost] = useState<DeletedBaby[]>([]);

  useEffect(() => {
    instance
      .get('/isDeleted')
      .then(response => {
        setDeletedBabyList([...response.data].reverse());
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setCurrentPost(deletedBabyList);
  }, [deletedBabyList]);

  const restoreBaby = (babyId: number) => {
    if (window.confirm('해당 아기 정보를 복구하시겠습니까?')) {
      instance
        .put(`/isDeleted/${babyId}`)
        .then(response => {
          alert('아기 정보가 성공적으로 복구되었습니다.');
          window.location.reload();
        })
        .catch(error => {
          console.error('복구 실패:', error);
        });
    }
  };

  return (
    <Background $background={orangeBackground}>
      <div>데이터 복구</div>
      <AdminBar />
      <Outlet />
      <div className="faq-list">
        <table>
          <colgroup>
            <col width="10%" />
            <col width="10%" />
            <col width="20%" />
            <col width="20%" />
            <col width="10%" />
            <col width="20%" />
            <col width="10%" />
          </colgroup>

          <thead>
            <tr>
              <th>번호</th>
              <th>아이ID</th>
              <th>아이 이름</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>삭제된 날짜</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {currentPost.map((deletedBaby, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{deletedBaby.babyId}</td>
                <td>{deletedBaby.name}</td>
                <td>{deletedBaby.birthDate}</td>
                <td>{deletedBaby.gender}</td>
                <td>{deletedBaby.deletedAt}</td>
                <td>
                  <button onClick={() => restoreBaby(deletedBaby.babyId)}>
                    복구
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Background>
  );
};

export default RestorePage;
