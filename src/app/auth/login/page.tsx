'use client';

import { TextField } from '@/components/Form';
import Notification from '@/components/Notification';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';
import { NOTIFICATION_INITIAL_STATE } from './utils/constants';
import { loginSchema } from './utils/schemas';
import { LoginType } from './utils/types';

export default function Login() {
  const [notification, setNotification] = useState(NOTIFICATION_INITIAL_STATE);
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
      setNotification({ isOpen: true, message: 'Login bem-sucedido!', result: 'success' });
      router.push('/home');
    } else if (!ok && error) {
      setNotification({ isOpen: true, message: error, result: 'error' });
    }
  };

  return (
    <S.Main>
      <h1>Login</h1>
      <FormProvider {...loginForm}>
        <S.Form onSubmit={handleSubmit(login)} noValidate>
          <TextField label="E-mail" name="email" type="email" />
          <TextField label="Senha" name="password" type="password" />
          <S.Button type="submit" variant="contained" color="primary" size="large">
            Entrar
          </S.Button>
        </S.Form>
      </FormProvider>
      <Notification closeNotification={closeNotification} {...notification} />
    </S.Main>
  );
}
