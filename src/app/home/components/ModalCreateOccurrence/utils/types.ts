import { SeverityType } from '@/utils/types';
import { z } from 'zod';
import { createOccurrenceSchema } from './schemas';

export type ModalCreateOccurrenceProps = {
  handleModal: () => void;
  handleNotification: (message: string, severity: SeverityType) => void;
  handleUpdateTableData: () => void;
  isOpen: boolean;
  userId: string;
};

export type CreateOccurrenceType = z.infer<typeof createOccurrenceSchema>;
