interface User {
  id: number;
  name: string;
}

interface Baby {
  birthDate: string;
  gender: string;
  name: string;
  userId: number;
}

//   birthDate: '2023-08-07';
//   gender: 'string';
//   name: 'string';
//   userId: 0;
//   authority: 'string'; -> 뺐음

export type { User, Baby };
