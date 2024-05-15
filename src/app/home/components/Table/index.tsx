import * as Mui from '@mui/material';
import { TableBody, TableHead } from './components';
import { HEADERS } from './utils/constants';
import { TableProps } from './utils/types';

export default function Table({ data, handleModal }: TableProps) {
  return (
    <Mui.Table>
      <TableHead headers={HEADERS} />
      <TableBody data={data} handleModal={handleModal} />
    </Mui.Table>
  );
}
