import { instance } from '@/apis/instance';
import { RecordTypeA, RecordTypeB, RecordTypeC } from '@/types/recordTypes';

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

const addRecordTypeA = async (type: string, recordTypeA: RecordTypeA) => {
  try {
    console.log(type, recordTypeA, 'AAAAAAAAAAAAA');
    await instance.post(`/${type}`, recordTypeA);
  } catch {
    throw new Error('recordTypeA add error');
  }
};

const addRecordTypeB = async (type: string, recordTypeB: RecordTypeB) => {
  try {
    console.log(type, recordTypeB, 'BBBBBBBBB');
    await instance.post(`/${type}`, recordTypeB);
  } catch {
    throw new Error('recordTypeB add error');
  }
};

const addRecordTypeC = async (type: string, recordTypeC: RecordTypeC) => {
  try {
    console.log(type, recordTypeC, 'CCCCCCCCCC');
    await instance.post(`/${type}`, recordTypeC);
  } catch {
    throw new Error('recordTypeC add error');
  }
};

export {
  getAllCategoryRecords,
  addRecordTypeA,
  addRecordTypeB,
  addRecordTypeC,
};
