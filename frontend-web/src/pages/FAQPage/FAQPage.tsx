import React, { useState, useEffect } from 'react';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';
import { Link, Outlet } from 'react-router-dom';
import { instance } from '@/apis/instance';
import { FAQ } from '@/types';

const FAQPage = () => {
  const [currentPost, setCurrentPost] = useState<FAQ[]>([]);

  const getFAQList = async () => {
    try {
      const response = await instance.get(`/faqs`);
      return response.data;
    } catch (error) {
      throw new Error('no data returned from the API - AllCategory');
    }
  };

  useEffect(() => {
    getFAQList()
      .then(faqList => {
        setCurrentPost([...faqList].reverse());
      })
      .catch(error => {
        console.error('FAQ 데이터 가져오기 실패:', error);
      });
  }, []);

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
            {currentPost.map((faqItem, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="title">
                  <Link to={`/admin/faq/${faqItem.faqId}`}>
                    {faqItem.title}
                  </Link>
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
