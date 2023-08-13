import { instance } from '@/apis/instance';
import { AllRecords } from '@/types/recordTypes';

const getAllCategoryRecords = async (babyId: number, date: string) => {
  try {
    const response = await instance.get(
      `/allRecords?babyId=${babyId}&createdDate=${date}`
    );
    return response.data;
  } catch {
    new Error('no data returned from the API - AllCategory');
  }
};

const addRecord = async (type: string, record: AllRecords) => {
  try {
    await instance.post(`/${type}`, record);
  } catch {
    throw new Error('record add error');
  }
};

export { getAllCategoryRecords, addRecord };
