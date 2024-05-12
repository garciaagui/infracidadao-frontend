import * as Mui from '@mui/material';
import { TableBodyProps } from '../../utils/types';

export default function TableBody({ data }: TableBodyProps) {
  return (
    <Mui.TableBody>
      {data.map((item) => (
        <Mui.TableRow key={item.id}>
          <Mui.TableCell>{item.id}</Mui.TableCell>
          <Mui.TableCell>{item.title}</Mui.TableCell>
          <Mui.TableCell>{item.createdAt}</Mui.TableCell>
          <Mui.TableCell>{item.status}</Mui.TableCell>
          <Mui.TableCell>{item.neighborhood}</Mui.TableCell>
          <Mui.TableCell>{item.street}</Mui.TableCell>
        </Mui.TableRow>
      ))}
    </Mui.TableBody>
  );
}
