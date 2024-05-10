import { AxiosError, AxiosResponse } from 'axios';
import { z } from 'zod';
import { createOccurrenceSchema } from './schemas';

export type ModalCreateOccurrenceProps = {
  handleModal: () => void;
  handleNotification: (message: string, result: string) => void;
  isOpen: boolean;
};

export type CreateOccurrenceType = z.infer<typeof createOccurrenceSchema>;

export type CustomAxiosError = AxiosError & {
  response?: AxiosResponse & {
    data: {
      message: string;
    };
  };
};
