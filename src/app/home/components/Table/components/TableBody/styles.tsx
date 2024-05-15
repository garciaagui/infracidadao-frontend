import * as Mui from '@mui/material';
import { styled } from '@mui/material/styles';

export const TableRow = styled(Mui.TableRow)`
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
