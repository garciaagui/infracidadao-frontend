export type TableDataType = {
  title: string;
  neighborhood: string;
  street: string;
  status: string;
  createdAt: string;
};

export type TableHeadProps = {
  headers: { key: string; label: string }[];
};

export type TableBodyProps = {
  columns: (keyof TableDataType)[];
  data: TableDataType[];
};

export type TableProps = {
  data: TableDataType[];
};
