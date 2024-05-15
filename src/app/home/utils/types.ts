export type StatusType = 'Aberto' | 'Andamento' | 'Finalizado';

export type OccurrenceType = {
  id: number;
  title: string;
  description: string;
  neighborhood: string;
  street: string;
  zipCode: string;
  reference?: string;
  status: StatusType;
  image: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

export type TableDataType = {
  id: number;
  title: string;
  neighborhood: string;
  street: string;
  status: StatusType;
  createdAt: string;
};
