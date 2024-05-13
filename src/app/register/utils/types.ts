import { AxiosError, AxiosResponse } from 'axios';
import { z } from 'zod';
import { registerSchema } from './schemas';

export type RegisterType = z.infer<typeof registerSchema>;

type SeverityType = 'success' | 'error' | 'warning';

export type NotificationType = {
  isOpen: boolean;
  message: string;
  severity: SeverityType;
};

export type CustomAxiosError = AxiosError & {
  response?: AxiosResponse & {
    data: {
      message: string;
    };
  };
};
