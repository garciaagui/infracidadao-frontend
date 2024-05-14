import * as Mui from '@mui/material';
import { TableBodyProps } from '../../utils/types';
import * as Styled from './styles';

export default function TableBody({ data, handleModal }: TableBodyProps) {
  return (
    <Mui.TableBody>
      {data.map((item) => (
        <Styled.TableRow key={item.id} onClick={() => handleModal(Number(item.id))}>
          <Styled.IdTableCell width={'5%'}>#{item.id}</Styled.IdTableCell>
          <Mui.TableCell width={'30%'}>{item.title}</Mui.TableCell>
          <Mui.TableCell width={'10%'}>{item.createdAt}</Mui.TableCell>
          <Styled.StatusTableCell $value={item.status} width={'15%'}>
            <p>{item.status}</p>
          </Styled.StatusTableCell>
          <Mui.TableCell width={'15%'}>{item.neighborhood}</Mui.TableCell>
          <Mui.TableCell width={'25%'}>{item.street}</Mui.TableCell>
        </Styled.TableRow>
      ))}
    </Mui.TableBody>
  );
}
