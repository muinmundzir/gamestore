import axios from 'axios';
import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getFeaturedGames() {
  const url = `${ROOT_API}/${API_VERSION}/player/homepage`;

  return callAPI({
    url,
    method: 'GET',
    data: null,
  });
}

export async function getDetailVoucher(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/player/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    data: id,
  });
}

export async function getGameCategories() {
  const url = `${ROOT_API}/${API_VERSION}/player/category`;

  return callAPI({
    url,
    method: 'GET',
    data: null,
  });
}
