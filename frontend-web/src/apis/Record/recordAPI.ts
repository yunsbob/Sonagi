import { instance } from '@/apis/instance';
import { RecordTypeA } from '@/types/recordTypes';

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
    console.log(type, recordTypeA, 'herehere');
    await instance.post(`/${type}`, recordTypeA);
  } catch {
    throw new Error('recordTypeA add error');
  }
};

export { getAllCategoryRecords, addRecordTypeA };
