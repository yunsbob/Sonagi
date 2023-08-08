import { instance } from '@/apis/instance';
import { Baby } from '@/types';

const addBaby = async (baby: Baby) => {
  try {
    await instance.post('/babyInfos', baby);
  } catch {
    new Error('baby info add error');
  }
};

const getBaby = async (userId: number) => {
  try {
    // 요청 후 결과 받아보고 싶을 때
    // const response = await instance.get(`/babyInfos/${userId}`);
    // console.log(response.data);
    //return response.data;
    await instance.get(`/babyInfos/${userId}`);
  } catch (error) {
    new Error('baby info get error');
  }
};

export { addBaby, getBaby };
