import axios, { AxiosResponse } from 'axios';

export async function getAgify(baseUrl: string, params: any): Promise<AxiosResponse> {
  return axios.get(baseUrl, {
    params,
    validateStatus: () => true,
    timeout: 10000
  });
}
