import { instance } from '@/apis/instance';
import { User } from '@/types';

const updateUser = async (user: User) => {
  try {
    await instance.put('/name', user);
  } catch {
    new Error('user name put error');
  }
};

// 알림 전체 상태 get
const getNotification = async (userId: number) => {
  try {
    const response = await instance.get(`/notification/${userId}`);
    return response.data;
  } catch {
    new Error('get user notification state');
  }
};

const updateAlarm = async (
  alarmType: string,
  userId: number,
  alarmState: boolean
) => {
  await instance.put(`/${alarmType}/${userId}/${Number(alarmState)}`);
};

export { updateUser, getNotification, updateAlarm };
