// import { CardContentBar } from '@/components/molecules/CardContent/CardContentBar';
// import { CardContentText } from '@/components/molecules/CardContent/CardContentText';
// import { CardHeader } from '@/components/molecules/CardHeader/CardHeader';
// import { CardContainer } from '@/components/organisms/Card/Card.styles';
// import { categoryToColorMap } from '@/constants/categoryToColorMap';
// import { selectedCategoryState } from '@/states/categoryState';
// import theme from '@/styles/theme';
// import { useRecoilValue } from 'recoil';
// // import meal from '@/assets/images/img-meal.png';
// import { PATH } from '@/constants/path';
// import { selectedDateState } from '@/states/dateState';
// import { useEffect } from 'react';
// import { categoryEnToKo } from '@/constants/categoryEnToKo';
// import { Category } from '@/types';

const Card = () => {
  //   const currentCategory: Category = useRecoilValue(
  //     selectedCategoryState(PATH.GRAPH)
  //   );
  //   const currentTheme = categoryToColorMap[currentCategory];
  //   const selectedDate = useRecoilValue(selectedDateState);
  //   // const categoryDetail = {
  //   //     Meal: {text: '식사 통계', imgSrc: meal, type: ['횟수', '용량', '시간'], unit:['회', 'ml', '시간', '분']}
  //   // }
  //   useEffect(() => {
  //     console.log(selectedDate);
  //   }, [selectedDate]);
  //   return (
  //     <CardContainer $borderColor={theme.color[currentTheme]}>
  //       <CardHeader
  //         text={`${categoryEnToKo[currentCategory]} 통계`}
  //         imgSrc={require(`@/assets/images/img-${currentCategory.toLowerCase()}.png`)}
  //       />
  //       <CardContentText type="횟수" data={4} unit="회" />
  //       <CardContentBar $borderColor={theme.color[currentTheme]} $ratio={40} />
  //       <CardContentText type="용량" data={100} unit="ml" />
  //       <CardContentBar $borderColor={theme.color[currentTheme]} $ratio={40} />
  //       <CardContentText type="시간" data={2} unit="시간" data2={30} unit2="분" />
  //       <CardContentBar $borderColor={theme.color[currentTheme]} $ratio={20} />
  //     </CardContainer>
  //   );
};

export { Card };
