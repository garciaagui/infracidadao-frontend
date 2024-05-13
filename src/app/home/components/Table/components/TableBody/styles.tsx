import * as Mui from '@mui/material';
import { styled } from '@mui/material/styles';

export const TableRow = styled(Mui.TableRow)`
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const IdTableCell = styled(Mui.TableCell)`
  color: gray;
`;

export const StatusTableCell = styled(Mui.TableCell)<{ $value: string }>`
  font-weight: bold;
  text-align: center;

  & > p {
    border-radius: 10px;
    padding: 0.2rem;
    width: 60%;
    background-color: ${(props) => {
      if (props.$value === 'Aberto') return '#e9c56a69';
      else if (props.$value === 'Andamento') return '#145ca04d';
      else return '#2a9d906d';
    }};
    border: 1px solid;
    border-color: ${(props) => {
      if (props.$value === 'Aberto') return '#e9c56a7b';
      else if (props.$value === 'Andamento') return '#145ca066';
      else return '#2a9d907b';
    }};
    color: ${(props) => {
      if (props.$value === 'Aberto') return '#b69238';
      else if (props.$value === 'Andamento') return '#145DA0';
      else return '#188175';
    }};
  }
`;
