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

    return response.data ? response.data : response;
  } catch {
    new Error('get coparent list error');
  }
};

const deleteCoparent = async (babyId: number, userId: number) => {
  console.log('삭제하는 babyId ', babyId);
  try {
    await instance.delete(`/coparents/${babyId}/${userId}`);
  } catch {
    new Error('delete coparent error');
  }
};

const getBabyCode = async (babyId: number) => {
  try {
    const response = await instance.get(`/babyCode?babyId=${babyId}`);
    return response.data;
  } catch {
    new Error('get baby code error');
  }
};

// 아기 코드로 아기 등록
const registerBabyCode = async (userId: number, code: string) => {
  await instance.post('babyCode', { userId: userId, code: code });
};

export {
  addBaby,
  getBaby,
  getCoParent,
  deleteCoparent,
  getBabyCode,
  registerBabyCode,
};
