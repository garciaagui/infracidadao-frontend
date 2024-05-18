import { OccurrenceType, StatusType, UserType } from '@/app/home/utils/types';
import { SeverityType } from '@/utils/types';
import { z } from 'zod';
import { createReplySchema } from './schemas';

export type ModalOccurrenceDetailsProps = {
  handleModal: (id: number) => void;
  handleNotification: (message: string, severity: SeverityType) => void;
  handleUpdateTableData: () => void;
  isOpen: boolean;
  loggedUser: UserType | undefined;
  occurrenceId: number;
};

export type ModalOccurrenceReplyProps = {
  handleModal: (id: number) => void;
  handleNotification: (message: string, severity: SeverityType) => void;
  handleUpdateModalData: () => void;
  isOpen: boolean;
  loggedUserId: number;
  occurrenceData: OccurrenceType;
};

export type CreateReplyFormType = z.infer<typeof createReplySchema>;

export type CreateReplyType = {
  userId: number;
  occurrenceId: number;
  occurrenceStatus: Exclude<StatusType, 'Aberto'>;
} & CreateReplyFormType;
