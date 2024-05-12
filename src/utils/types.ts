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
