'use client';

import { Header } from '@/components';
import theme from '@/styles/theme';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { ThemeProvider } from '@mui/material/styles';
import { Card } from './_components';
import { Main } from './styles';

export default function Admin() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <h1>Área do Administrador</h1>
        <Card
          href="/admin/new-user"
          icon={<PersonAddAltSharpIcon />}
          label="Adicione usuários do tipo employee e admin"
          title="Novo usuário"
        />
      </Main>
    </ThemeProvider>
  );
}
