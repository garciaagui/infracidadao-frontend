'use client';

import { Header } from '@/components';
import theme from '@/styles/theme';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Link, Main } from './styles';

export default function Admin() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <h1>Área do Administrador</h1>
        <Card sx={{ width: 275 }} variant="outlined">
          <CardActionArea>
            <Link href="/admin/new-user">
              <CardContent>
                <Stack spacing={1}>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <PersonAddAltSharpIcon fontSize="small" />
                    <h3>Novo usuário</h3>
                  </Stack>
                  <Typography>Adicione usuários do tipo employee e admin</Typography>
                </Stack>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Main>
    </ThemeProvider>
  );
}
