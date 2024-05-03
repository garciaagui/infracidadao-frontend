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

export type TableHeadProps = {
  headers: { key: string; label: string }[];
};

export type TableBodyProps = {
  columns: (keyof OccurrenceType)[];
  data: OccurrenceType[];
};

export type TableProps = {
  data: OccurrenceType[];
};