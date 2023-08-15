import { instance } from '@/apis/instance';
import { AllRecords, CombinedRecord } from '@/types/recordTypes';

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

const getRecordDetails = async (type: string, recordId: number) => {
  try {
    // ex. tummytimes/38
    const response = await instance.get(`/${type}/${recordId}`);
    return response.data;
  } catch {
    new Error('get record code error');
  }
};

const addRecord = async (type: string, record: AllRecords) => {
  try {
    await instance.post(`/${type}`, record);
  } catch {
    throw new Error('record add error');
  }
};

// record에 카테고리가 없으니까..
const updateRecord = async (record: CombinedRecord, queryName: string) => {
  try {
    await instance.put(`/${queryName}`, record);
  } catch {
    new Error('record put error');
  }
};

export { getAllCategoryRecords, addRecord, updateRecord, getRecordDetails };
