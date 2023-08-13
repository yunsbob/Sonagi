import { instance } from '@/apis/instance';
import { BabiesOfUser, Baby, UpdateBaby } from '@/types';

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

const deleteCoparent = async (babyId: number, coparentId: number) => {
  await instance.delete(`/coparents/${babyId}/${coparentId}`);
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

// 아이 정보 변경
const updateBaby = async (baby: UpdateBaby) => {
  try {
    await instance.put('/babyDetail', baby);
  } catch {
    new Error('baby name put error');
  }
};

export {
  addBaby,
  getBaby,
  getCoParent,
  deleteCoparent,
  getBabyCode,
  registerBabyCode,
  updateBaby,
};
