import * as Mui from '@mui/material';
import { TableHeadProps } from '../../utils/types';

export default function TableHead({ headers }: TableHeadProps) {
  return (
    <Mui.TableHead>
      <Mui.TableRow>
        {headers.map((header) => {
          return <Mui.TableCell key={header.key}>{header.label}</Mui.TableCell>;
        })}
      </Mui.TableRow>
    </Mui.TableHead>
  );
}
