import { instance } from '@/apis/instance';

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

export { getAllCategoryRecords };
