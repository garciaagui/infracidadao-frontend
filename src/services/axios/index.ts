import { StatusType } from '@/app/home/utils/types';
import { RegisterType } from '@/app/register/utils/types';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Accept: 'application/json;charset=UTF-8',
  },
});

export const requestData = async <T>(endpoint: string): Promise<T> => {
  const response: AxiosResponse<T> = await instance.get(endpoint);
  return response.data;
};

export const requestLogin = async (email: string, password: string) => {
  const body = { email, password };
  const { data } = await instance.post('/users/auth/login', body);

  return data;
};

export const requestOccurrenceCreation = async (formData: FormData) => {
  const { data } = await instance.post('/occurrences', formData);

  return data;
};

export const requestOccurrenceStatusUpdate = async (id: number, newStatus: StatusType) => {
  const { data } = await instance.patch(`/occurrences/${id}/update-status`, {
    status: newStatus,
  });

  return data;
};

export const requestReplyCreation = async (formData: FormData) => {
  const { data } = await instance.post('/occurrence-reply', formData);

  return data;
};

export const requestUserCreation = async (registerData: RegisterType) => {
  const { data } = await instance.post('/users/register', registerData);

  return data;
};
