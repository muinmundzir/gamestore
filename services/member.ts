import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/player/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getMemberTransactions(parameter) {
  let params = '';
  if (parameter === 'all') {
    params = '';
  } else {
    params = `?status=${parameter}`;
  }
  const url = `${ROOT_API}/${API_VERSION}/player/history${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}