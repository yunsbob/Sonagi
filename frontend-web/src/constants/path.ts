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
  DIARYUPDATE: '/main/diaryUpdate',
  MYPAGE: '/main/myPage',
  ALARM: '/main/myPage/alarm',
  FAQFORUSER: '/FAQForUser',
  QUESTIONFORUSER: '/questionForUser',
  // ALARM: '/main/alarm',
  REGISTERBABYPROFILE: '/regBabyProfile',
  UPDATEBABYPROFILE: '/updateBabyProfile',
  DETAILRECORD: '/main/detailRecord',
  ADMIN: '/admin',
  FAQ: '/admin/faq',
  QUESTION: '/admin/question',
  RESTORE: '/admin/restore',
  REGAGAIN: '/regAgain',
} as const;

export { PATH };
