'use client';

import { TextField } from '@/components/Form';
import Notification from '@/components/Notification';
import theme from '@/styles/theme';
import { NOTIFICATION_INITIAL_STATE } from '@/utils/constants';
import { NotificationType } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import { signIn, SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Styled from './styles';
import { loginSchema } from './utils/schemas';
import { LoginType } from './utils/types';

export default function Login() {
  const [notification, setNotification] = useState<NotificationType>(NOTIFICATION_INITIAL_STATE);
  const router = useRouter();
  const loginForm = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const { handleSubmit } = loginForm;

  const closeNotification = () => {
    setNotification((prevState) => ({ ...prevState, isOpen: false }));
  };

  const login = async (data: LoginType) => {
    const response = (await signIn('credentials', {
      ...data,
      redirect: false,
    })) as SignInResponse;

    const { ok, error } = response;

    if (ok) {
      setNotification({ isOpen: true, message: 'Login bem-sucedido!', severity: 'success' });
      router.push('/home');
    } else if (!ok && error) {
      setNotification({ isOpen: true, message: error, severity: 'error' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Styled.Main>
        <h1>Login</h1>
        <FormProvider {...loginForm}>
          <Styled.Form onSubmit={handleSubmit(login)} noValidate>
            <TextField label="E-mail" name="email" type="email" />
            <TextField label="Senha" name="password" type="password" />
            <Styled.Button type="submit" variant="contained" color="primary" size="large">
              Entrar
            </Styled.Button>
          </Styled.Form>
        </FormProvider>
        <Styled.Link href={'/register'}>Não tem conta? Cadastre-se</Styled.Link>
        <Notification closeNotification={closeNotification} {...notification} />
      </Styled.Main>
    </ThemeProvider>
  );
}
