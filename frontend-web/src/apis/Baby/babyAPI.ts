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
    const response = await instance.get(`/babyInfos/${userId}`);
    return response.data;
  } catch {
    new Error('No data returned from the API');
  }
};

const getCoParent = async (userId: number, babyId: number) => {
  try {
    const response = await instance.get(`/coparents/${userId}/${babyId}`);
    return response.data;
  } catch {
    new Error('get coparent list error');
  }
};

export { addBaby, getBaby, getCoParent };
