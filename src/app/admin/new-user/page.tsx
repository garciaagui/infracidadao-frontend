'use client';

import { Header } from '@/components';
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';

export default function NewUser() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <h1>Novo Usuário</h1>
      </>
    </ThemeProvider>
  );
}
