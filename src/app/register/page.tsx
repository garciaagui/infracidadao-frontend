'use client';

import { Loading, Notification, TextField } from '@/components';
import { requestUserCreation } from '@/services/axios';
import theme from '@/styles/theme';
import { NOTIFICATION_INITIAL_STATE } from '@/utils/constants';
import { CustomAxiosError, NotificationType } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Form, Main } from './styles';
import { registerSchema } from './utils/schemas';
import { RegisterFormType } from './utils/types';

export default function Register() {
  const [notification, setNotification] = useState<NotificationType>(NOTIFICATION_INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const registerForm = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit } = registerForm;

  const closeNotification = () => {
    setNotification((prevState) => ({ ...prevState, isOpen: false }));
  };

  const login = async (email: string, password: string) => {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    router.push('/home');
  };

  const register = async (data: RegisterFormType) => {
    setLoading(true);

    try {
      await requestUserCreation({ ...data, role: 'user' });
      setNotification({ isOpen: true, message: 'Usuário cadastrado!', severity: 'success' });
      await login(data.email, data.password);
    } catch (error) {
      const { response } = error as CustomAxiosError;
      const message = response?.data.message;
      setNotification({ isOpen: true, message, severity: 'error' });
    }

    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <h1>Cadastro de usuários</h1>
        <FormProvider {...registerForm}>
          <Form onSubmit={handleSubmit(register)} noValidate>
            <TextField label="Nome" name="name" type="text" />
            <TextField label="E-mail" name="email" type="email" />
            <TextField label="Senha" name="password" type="password" />
            {!loading ? (
              <Button type="submit" variant="contained" color="primary" size="large">
                Cadastrar
              </Button>
            ) : (
              <Loading />
            )}
          </Form>
        </FormProvider>
        <Notification closeNotification={closeNotification} {...notification} />
      </Main>
    </ThemeProvider>
  );
}
