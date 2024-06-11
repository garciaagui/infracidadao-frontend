'use client';

import { Header, Loading, Notification, SelectField, TextField } from '@/components';
import { requestUserCreation } from '@/services/axios';
import theme from '@/styles/theme';
import { NOTIFICATION_INITIAL_STATE } from '@/utils/constants';
import { CustomAxiosError, NotificationType } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Breadcrumbs, Button, Link, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form, Main } from './styles';
import { SELECT_OPTIONS } from './utils/constants';
import { adminNewUserSchema } from './utils/schemas';
import { AdminNewUserFormType } from './utils/types';

export default function NewUser() {
  const [notification, setNotification] = useState<NotificationType>(NOTIFICATION_INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const newUserForm = useForm<AdminNewUserFormType>({
    resolver: zodResolver(adminNewUserSchema),
  });

  const { handleSubmit, reset } = newUserForm;

  const closeNotification = () => {
    setNotification((prevState) => ({ ...prevState, isOpen: false }));
  };

  const register = async (data: AdminNewUserFormType) => {
    setLoading(true);

    try {
      await requestUserCreation(data);
      setNotification({ isOpen: true, message: 'Usuário adicionado!', severity: 'success' });
      reset();
    } catch (error) {
      const { response } = error as CustomAxiosError;
      const message = response?.data.message;
      setNotification({ isOpen: true, message, severity: 'error' });
    }

    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Main>
          <Stack direction="row" justifySelf="start">
            <Breadcrumbs sx={{ display: 'flex', alignItems: 'start' }}>
              <Link underline="hover" color="inherit" href="/admin">
                Admin
              </Link>
              <Typography color="text.primary">Novo usuário</Typography>
            </Breadcrumbs>
          </Stack>

          <h1>Novo usuário</h1>

          <FormProvider {...newUserForm}>
            <Form onSubmit={handleSubmit(register)} noValidate>
              <TextField label="Nome" name="name" type="text" />
              <TextField label="E-mail" name="email" type="email" />
              <TextField label="Senha" name="password" type="password" />
              <SelectField label="Função" name="role" options={SELECT_OPTIONS} />

              {!loading ? (
                <Button type="submit" variant="contained" color="primary" size="large">
                  Adicionar
                </Button>
              ) : (
                <Loading />
              )}
            </Form>
          </FormProvider>
        </Main>
        <Notification closeNotification={closeNotification} {...notification} />
      </>
    </ThemeProvider>
  );
}
