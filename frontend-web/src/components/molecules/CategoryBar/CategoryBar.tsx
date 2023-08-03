import { Image } from '@/components/atoms/Image/Image';
import { CategoryBarContainer } from '@/components/molecules/CategoryBar/CategoryBar.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  CategoryState,
  selectedCategoryState,
  Category,
  CategoryStateType,
} from '@/states/CategoryState';

import All from '@/assets/images/icon-category-all.png';
import Meal from '@/assets/images/icon-category-meal.png';
import Diaper from '@/assets/images/icon-category-diaper.png';
import Sleep from '@/assets/images/icon-category-sleep.png';
import Pump from '@/assets/images/icon-category-pumping-breast.png';
import Activity from '@/assets/images/icon-category-activity.png';
import Health from '@/assets/images/icon-category-health.png';
import Extra from '@/assets/images/icon-category-extra.png';

const CategoryBar = () => {
  const CategoryArray = [
    { name: 'All', img: All },
    { name: 'Meal', img: Meal },
    { name: 'Diaper', img: Diaper },
    { name: 'Sleep', img: Sleep },
    { name: 'Pump', img: Pump },
    { name: 'Activity', img: Activity },
    { name: 'Health', img: Health },
    { name: 'Extra', img: Extra },
  ];

  const [categoryState, setCategoryState] = useRecoilState(CategoryState);
  const currentCategory = useRecoilValue(selectedCategoryState);

  const onClickCategory = (categoryName: Category) => {
    setCategoryState(prevState => {
      return Object.keys(prevState).reduce((acc, category) => {
        return {
          ...acc,
          [category]: category === categoryName,
        };
      }, {} as CategoryStateType);
    });
  };

  return (
    <CategoryBarContainer>
      {CategoryArray.map((item, index) => (
        <Image
          key={index}
          src={item.img}
          id={item.name}
          onClick={() => onClickCategory(item.name as Category)}
          style={{
            filter:
              currentCategory !== 'All' && currentCategory !== item.name
                ? 'grayscale(100%)'
                : undefined,
          }}
          width={3.5}
        />
      ))}
    </CategoryBarContainer>
  );
};

export default CategoryBar;
