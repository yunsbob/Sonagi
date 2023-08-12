import React, { useState, useEffect } from 'react';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { FAQ } from '@/types';

const FAQPage = () => {
  const [faqList, setFAQList] = useState<FAQ[]>([]); // axios에서 받아온 게시글 데이터
  const [currentPost, setCurrentPost] = useState<FAQ[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/faqs')
      .then(response => {
        setFAQList([...response.data].reverse());
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setCurrentPost(faqList);
  }, [faqList]);
  return (
    <Background $background={orangeBackground}>
      <div>faq</div>
      <AdminBar />
      <Outlet />
      <div className="faq-list">
        <table>
          <colgroup>
            <col width="15%" />
            <col width="65%" />
            <col width="20%" />
          </colgroup>

          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
            </tr>
          </thead>

          <tbody>
            {currentPost.map((faqList, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="title">
                  <Link to={`/admin/faq/${faqList.id}`}>{faqList.title}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/admin/faq/create">
          <div>작성하기</div>
        </Link>
      </div>
    </Background>
  );
};

export default FAQPage;
