import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

const instance: Axios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken') || undefined}`,
  },
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async error => {
    console.log('에러발생');
    console.log(error);

    // //TODO: any 고치기
    // //TODO: accesstoken다시 발급

    // const {
    //   config,
    //   response: { status },
    // } = error;
    // const originalRequest = config;
    // if (status === 403) {
    // 로그아웃 시키기
    //   console.log();
    //   const accessToken = localStorage.getItem('ACCESS_TOKEN');
    //   try {
    //     const { data } = await axios({
    //       method: 'post',
    //       url: `/members/reissue`,
    //       data: { accessToken },
    //     });
    //     const newAccessToken = data.data.accessToken;
    //     originalRequest.headers = {
    //       'Content-Type': 'application/json',
    //       Authorization: 'Bearer ' + newAccessToken,
    //     };
    //     localStorage.setItem('ACCESS_TOKEN', newAccessToken);
    //     return await axios(originalRequest);
    //   } catch (err) {
    //     new Error(err);
    //   }
    // }
    // return Promise.reject(error);
  }
);

export { instance };
