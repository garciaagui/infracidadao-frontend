import { LoggedUserType, OccurrenceType } from '@/app/home/utils/types';
import { SeverityType } from '@/utils/types';
import { z } from 'zod';
import { createReplySchema } from './schemas';

export type ModalOccurrenceDetailsProps = {
  handleModal: (id: number) => void;
  handleNotification: (message: string, severity: SeverityType) => void;
  handleUpdateTableData: () => void;
  isOpen: boolean;
  loggedUser: LoggedUserType;
  occurrenceId: number;
};

export type ModalOccurrenceReplyProps = {
  handleModal: (id: number) => void;
  handleNotification: (message: string, severity: SeverityType) => void;
  handleUpdateModalData: () => void;
  isOpen: boolean;
  loggedUserId: string;
  occurrenceData: OccurrenceType;
};

export type CreateReplyType = z.infer<typeof createReplySchema>;
