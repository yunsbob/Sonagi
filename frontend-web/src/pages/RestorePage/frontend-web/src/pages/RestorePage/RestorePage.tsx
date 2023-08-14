import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { useEffect, useState } from 'react';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { Outlet, Link } from 'react-router-dom';
import { DeletedBaby } from '@/types';
import axios from 'axios';

const RestorePage = () => {
  const [deletedBabyList, setDeletedBabyList] = useState<DeletedBaby[]>([]);
  const [currentPost, setCurrentPost] = useState<DeletedBaby[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/isDeleted')
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

  const handleRestore = (babyId: number) => {
    axios
      .put(`http://localhost:8080/api/isDeleted/${babyId}`)
      .then(response => {
        // 복구 성공 시 필요한 동작 수행
        console.log('아기 복구 완료');
        // 필요한 상태 업데이트 등을 수행할 수 있습니다.
      })
      .catch(error => {
        console.error('복구 실패:', error);
      });
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
          </colgroup>

          <thead>
            <tr>
              <th>번호</th>
              <th>아이ID</th>
              <th>아이 이름</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>삭제된 날짜</th>
            </tr>
          </thead>

          <tbody>
            {currentPost.map((deletedBaby, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{deletedBaby.id}</td>
                <td>{deletedBaby.name}</td>
                <td>{deletedBaby.birthDate}</td>
                <td>{deletedBaby.gender}</td>
                <td className="title"></td>
                <td>{deletedBaby.deletedAt}</td>
                <td>
                  <button onClick={() => handleRestore(deletedBaby.id)}>
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
