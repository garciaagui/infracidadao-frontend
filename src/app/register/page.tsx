'use client';

import { TextField } from '@/components/Form';
import Notification from '@/components/Notification';
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
import * as Styled from './styles';
import { registerSchema } from './utils/schemas';
import { RegisterType } from './utils/types';

export default function Register() {
  const [notification, setNotification] = useState<NotificationType>(NOTIFICATION_INITIAL_STATE);
  const router = useRouter();
  const registerForm = useForm<RegisterType>({
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

  const register = async (data: RegisterType) => {
    try {
      await requestUserCreation(data);
      setNotification({ isOpen: true, message: 'Usuário cadastrado!', severity: 'success' });
      await login(data.email, data.password);
    } catch (error) {
      const { response } = error as CustomAxiosError;
      const message = response?.data.message;
      setNotification({ isOpen: true, message, severity: 'error' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Styled.Main>
        <h1>Cadastro de usuários</h1>
        <FormProvider {...registerForm}>
          <Styled.Form onSubmit={handleSubmit(register)} noValidate>
            <TextField label="Nome" name="name" type="text" />
            <TextField label="E-mail" name="email" type="email" />
            <TextField label="Senha" name="password" type="password" />
            <Styled.Button type="submit" variant="contained" color="primary" size="large">
              Cadastrar
            </Styled.Button>
          </Styled.Form>
        </FormProvider>
        <Notification closeNotification={closeNotification} {...notification} />
      </Styled.Main>
    </ThemeProvider>
  );
}
