import { Image } from '@/components/atoms/Image/Image';

import All from '@/assets/images/icon-category-all.png';
import Meal from '@/assets/images/icon-category-meal.png';
import Diaper from '@/assets/images/icon-category-diaper.png';
import Sleep from '@/assets/images/icon-category-sleep.png';
import Pump from '@/assets/images/icon-category-pumping-breast.png';
import Activity from '@/assets/images/icon-category-activity.png';
import Health from '@/assets/images/icon-category-health.png';
import Extra from '@/assets/images/icon-category-extra.png';
import { CategoryBarContainer } from '@/components/molecules/CategoryBar/CategoryBar.styles';

const CategoryBar = () => {
  const CategoryArray = [
    All,
    Meal,
    Diaper,
    Sleep,
    Pump,
    Activity,
    Health,
    Extra,
  ];

  return (
    <CategoryBarContainer>
      {CategoryArray.map((item, index) => (
        <Image key={index} src={item} width={3.5} />
      ))}
    </CategoryBarContainer>
  );
};

export default CategoryBar;
