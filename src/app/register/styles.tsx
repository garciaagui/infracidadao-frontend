import * as Mui from '@mui/material';
import styled from 'styled-components';

export const Button = styled(Mui.Button)`
  align-self: center;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
`;

export const Main = styled.main`
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  margin: 4rem auto;
  row-gap: 2rem;
  width: 50%;
`;
