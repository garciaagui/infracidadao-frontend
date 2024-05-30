import NextLink from 'next/link';
import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-rows: auto 2fr;
  margin: 4rem 12rem;
  row-gap: 2rem;
`;

export const Link = styled(NextLink)`
  color: black;
  text-decoration: none;
`;
