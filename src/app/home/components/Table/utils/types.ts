import { TableDataType } from '@/app/home/utils/types';

export type TableHeadProps = {
  headers: { key: string; label: string }[];
};

export type TableBodyProps = {
  data: TableDataType[];
};

export type TableProps = {
  data: TableDataType[];
};
