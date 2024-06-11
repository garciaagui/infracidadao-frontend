import { AxiosError, AxiosResponse } from 'axios';

export type CustomAxiosError = AxiosError & {
  response?: AxiosResponse & {
    data: {
      message: string;
    };
  };
};

export type SeverityType = 'success' | 'error' | 'warning';

export type NotificationType = {
  isOpen: boolean;
  message: string;
  severity: SeverityType;
};

export type RegisterType = {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'employee' | 'admin';
};
