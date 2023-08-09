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
  const response = await instance.get(`/babyInfos/${userId}`);
  if (!response.data) {
    throw new Error('No data returned from the API');
  }
  return response.data;
};

export { addBaby, getBaby };
