import { StatusType } from '@/app/home/utils/types';
import { SeverityType } from '@/utils/types';
import { z } from 'zod';
import { createReplySchema } from './schemas';

export type ModalOccurrenceDetailsProps = {
  handleModal: (id: number) => void;
  handleNotification: (message: string, severity: SeverityType) => void;
  isOpen: boolean;
  loggedUserRole: string;
  occurrenceId: number;
};

export type ModalOccurrenceReplyProps = {
  currentStatus: StatusType;
  handleModal: (id: number) => void;
  isOpen: boolean;
};

export type CreateReplyType = z.infer<typeof createReplySchema>;
