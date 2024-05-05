'use client';

import { TextField } from '@/components/Form';
import Notification from '@/components/Notification';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { signIn, SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
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
      router.push('/');
    } else if (!ok && error) {
      setNotification({ isOpen: true, message: error, result: 'error' });
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <FormProvider {...loginForm}>
        <form onSubmit={handleSubmit(login)}>
          <TextField label="E-mail" name="email" type="email" />
          <TextField label="Senha" name="password" type="password" />
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </form>
      </FormProvider>
      <Notification closeNotification={closeNotification} {...notification} />
    </main>
  );
}
