import { instance } from '@/apis/instance';
import { User } from '@/types';

const updateUser = async (user: User) => {
  console.log(user, '!!!!');
  //   try {

  //     return await instance.put('/name', user);
  //   } catch {
  //     console.log('user name put err');
  //   }
  try {
    await instance.put('/name', user);
  } catch {
    new Error('user name put error');
  }
};

export { updateUser };
