/* route 경로 지정 */
const PATH = {
  ROOT: '/',
  LOGIN: '/logIn',
  REDIRECT: '/oauth/redirect',
  SIGNIN: '/signIn',
  REGISTER: '/register',
  BABYCODE: '/babycode',
  MAIN: '/main',
  GRAPH: '/main/graph',
  GRAPHBYDAY: '/main/graph',
  GRAPHBYWEEK: '/main/graph/week',
  OURBABY: '/main/ourBaby',
  MEDICALINFO: '/main/ourBaby/medicalInfo',
  VACCINATION: '/main/ourBaby/vaccination',
  DIARY: '/main/diary',
  DIARYREGISTER: '/main/diaryRegister',
  MYPAGE: '/main/myPage',
  ALARM: '/main/myPage/alarm',
  REGISTERBABYPROFILE: '/regBabyProfile',
  UPDATEBABYPROFILE: '/updateBabyProfile',
  DETAILRECORD: '/main/detailRecord',
  ADMIN: '/admin',
  FAQ: '/admin/faq',
  QUESTION: '/admin/question',
  RESTORE: '/admin/restore',
} as const;

export { PATH };
