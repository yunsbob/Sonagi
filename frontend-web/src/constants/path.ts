/* route 경로 지정 */
const PATH = {
  ROOT: '/',
  LOGIN: '/logIn',
  SIGNIN: '/signIn',
  REGISTER: '/register',
  BABYCODE: '/babycode',
  MAIN: '/main',
  GRAPH: '/main/graph',
  GRAPHBYDAY: '/main/graph/day',
  GRAPHBYWEEK: 'main/graph/week',
  OURBABY: '/main/ourBaby',
  DIARY: '/main/diary',
  MYPAGE: '/main/myPage',
  REGISTERBABYPROFILE: '/regBabyProfile',
} as const;

export { PATH };
