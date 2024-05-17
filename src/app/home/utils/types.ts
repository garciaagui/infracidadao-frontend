export type StatusType = 'Aberto' | 'Andamento' | 'Finalizado';

export type OccurrenceReplyType = {
  id: number;
  description: string;
  imageUrl: string;
  userId: number;
  occurrenceId: number;
  createdAt: string;
  updatedAt: string;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

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
  user: UserType;
  occurrenceReplies: OccurrenceReplyType[];
};

export type TableDataType = {
  id: number;
  title: string;
  neighborhood: string;
  street: string;
  status: StatusType;
  createdAt: string;
};
