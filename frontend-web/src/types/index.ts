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
}

interface CustomModal {
  onModalClose: () => void;
  modalOpen: boolean;
}

/**
 * @param id - 식별 id
 * @param content
 * @param duration - 보여질 시간
 * @param bottom - 바닥으로부터의 px
 */
export interface Toast {
  id?: string;
  content: string;
  duration?: number;
  bottom?: number;
}

export type { User, Baby, BabiesOfUser, CustomModal };
