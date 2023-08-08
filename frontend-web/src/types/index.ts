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

export type { User, Baby };
