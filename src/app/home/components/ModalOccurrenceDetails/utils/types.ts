import { SeverityType } from '@/utils/types';

export type ModalOccurrenceDetailsProps = {
  handleModal: (id: number) => void;
  handleNotification: (message: string, severity: SeverityType) => void;
  occurrenceId: number;
  isOpen: boolean;
};
