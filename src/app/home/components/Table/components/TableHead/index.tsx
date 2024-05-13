import * as Mui from '@mui/material';
import { TableHeadProps } from '../../utils/types';
import * as Styled from './styles';

export default function TableHead({ headers }: TableHeadProps) {
  return (
    <Mui.TableHead>
      <Mui.TableRow>
        {headers.map((header) => {
          return <Styled.TableCell key={header.key}>{header.label}</Styled.TableCell>;
        })}
      </Mui.TableRow>
    </Mui.TableHead>
  );
}
