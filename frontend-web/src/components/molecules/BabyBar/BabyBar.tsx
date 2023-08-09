import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { BabyBarContainer } from '@/components/molecules/BabyBar/BabyBar.styles';
import babyCircleBlue from '@/assets/images/img-baby-blue-circle.png';

import { useGetBaby } from '@/apis/Baby/Queries/useGetBaby';
import { useRecoilState } from 'recoil';
import { userInfoState } from '@/states/UserState';
import React, { Suspense, useEffect } from 'react';
import {
  QueryErrorResetBoundary,
  UseErrorBoundary,
} from '@tanstack/react-query';

const BabyBar = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const userId = userInfo.id;

  const { data, isSuccess, isError, isLoading, isFetched } = useGetBaby(
    userInfo.id
  );

  // const test = useGetBaby(userInfo.id);
  // console.log(test);
  // TODO: 3 리코일 떼오기
  // console.log(baby, 'herere');
  const BabyArray = ['이지은', '이지금']; // TODO: 받아오기

  // useEffect(() => {
  //   console.log(data);
  //   // console.log(data);
  // }, [data]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if(isLoading) {
  //   return <div>Loading...<div/>;
  //   }

  return (
    <Suspense fallback={<div>loading..</div>}>
      {/* <QueryErrorResetBoundary fallback={<div>에러 발생</div>}> */}
      <BabyBarContainer>
        {data?.map((item, index) => (
          // 예외적으로 BabyBar의 padding값을 inline style으로 적용
          <Button
            option="default"
            size="xSmall"
            key={index}
            style={{ padding: '3px 9px 3px 4px' }}
          >
            <Image
              src={babyCircleBlue}
              width={1.2}
              style={{
                transform: 'rotate(-10.68deg)',
                margin: '2px',
              }}
            />
            {item.name}
          </Button>
        ))}
      </BabyBarContainer>
      {/* </QueryErrorResetBoundary> */}
    </Suspense>
  );
};

export default BabyBar;
