import { instance } from '@/apis/instance';
import { User } from '@/types';

const updateUser = async (user: User) => {
  try {
    await instance.put('/name', user);
  } catch {
    new Error('user name put error');
  }
};

const getNotification = async (userId: number) => {
  try {
    const response = await instance.get(`/notification/${userId}`);
    return response.data;
  } catch {
    new Error('get user notification state');
  }
};

export { updateUser, getNotification };
