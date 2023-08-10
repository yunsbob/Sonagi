interface User {
  userId: number;
  name: string;
}

interface Baby {
  birthDate: string;
  gender: string;
  name: string;
  userId: number;
}

interface BabiesOfUser {
  babyId: number;
  name: string;
  gender: string;
}

export type { User, Baby, BabiesOfUser };
