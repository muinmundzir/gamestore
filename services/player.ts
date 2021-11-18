import axios from 'axios';

export async function getFeaturedGames() {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const URL = 'player/homepage';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export function getDetailVoucher() {
  return null;
}
