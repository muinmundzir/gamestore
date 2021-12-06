import axios from 'axios';
import callAPI from '../config/api';
import { CheckoutTypes } from './data-types';

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

export async function setCheckout(data: CheckoutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/player/checkout`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function getMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/player/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
