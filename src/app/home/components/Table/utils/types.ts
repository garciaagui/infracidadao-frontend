import { TableDataType } from '@/app/home/utils/types';

export type TableHeadProps = {
  headers: { key: string; label: string }[];
};

export type TableBodyProps = {
  data: TableDataType[];
  handleModal: (id: number) => void;
};

export type TableProps = {
  data: TableDataType[];
  handleModal: (id: number) => void;
};
