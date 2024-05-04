import * as M from "@mui/material";
import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-rows: auto auto 2fr;
  margin: 4rem 12rem;
  row-gap: 2rem;
`;

export const Button = styled(M.Button)`
  font-weight: bold;
  justify-self: end;
`;
