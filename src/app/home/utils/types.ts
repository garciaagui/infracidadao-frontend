export type OccurrenceType = {
  id: number;
  title: string;
  description: string;
  neighborhood: string;
  street: string;
  zipCode: string;
  reference?: string;
  status: string;
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
  status: string;
  createdAt: string;
};
