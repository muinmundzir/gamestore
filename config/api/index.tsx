import axios, { AxiosRequestConfig } from 'axios';

const callAPI = async ({ url, method, data }: AxiosRequestConfig) => {
  const response = await axios({
    url,
    method,
    data,
  }).catch((error) => error.response);
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const res = {
    error: false,
    message: 'success',
    data: response.data.data,
  };

  return res;
};

export default callAPI;
