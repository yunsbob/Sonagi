import { instance } from '@/apis/instance';
import { User } from '@/types';

const updateUser = async (user: User) => {
  try {
    await instance.put('/name', user);
  } catch {
    new Error('user name put error');
  }
};

export { updateUser };
