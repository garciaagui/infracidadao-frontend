export type OccurrenceType = {
  id: number;
  title: string;
  description: string;
  neighborhood: string;
  street: string;
  reference?: string;
  status: string;
  image: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

export type TableDataType = {
  title: string;
  neighborhood: string;
  street: string;
  status: string;
  createdAt: string;
};

export type SeverityType = 'success' | 'error' | 'warning';

export type NotificationType = {
  isOpen: boolean;
  message: string;
  severity: SeverityType;
};
