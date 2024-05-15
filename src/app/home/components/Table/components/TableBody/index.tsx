import * as Mui from '@mui/material';
import StatusChip from '../../../StatusChip';
import { TableBodyProps } from '../../utils/types';
import * as Styled from './styles';

export default function TableBody({ data, handleModal }: TableBodyProps) {
  return (
    <Mui.TableBody>
      {data.map((item) => (
        <Styled.TableRow key={item.id} onClick={() => handleModal(Number(item.id))}>
          <Mui.TableCell width={'5%'} sx={{ color: 'gray' }}>
            #{item.id}
          </Mui.TableCell>
          <Mui.TableCell width={'30%'}>{item.title}</Mui.TableCell>
          <Mui.TableCell width={'10%'}>{item.createdAt}</Mui.TableCell>
          <Mui.TableCell width={'15%'}>
            <StatusChip status={item.status} size="medium" />
          </Mui.TableCell>
          <Mui.TableCell width={'15%'}>{item.neighborhood}</Mui.TableCell>
          <Mui.TableCell width={'25%'}>{item.street}</Mui.TableCell>
        </Styled.TableRow>
      ))}
    </Mui.TableBody>
  );
}
