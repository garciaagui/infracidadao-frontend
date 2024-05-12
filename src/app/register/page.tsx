'use client';

import { TextField } from '@/components/Form';
import Notification from '@/components/Notification';
import { requestUserCreation } from '@/services/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NOTIFICATION_INITIAL_STATE } from './utils/constants';
import { registerSchema } from './utils/schemas';
import { CustomAxiosError, NotificationType, RegisterType } from './utils/types';

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
    <main>
      <h1>Cadastro de usuários</h1>
      <FormProvider {...registerForm}>
        <form onSubmit={handleSubmit(register)} noValidate>
          <TextField label="Nome" name="name" type="text" />
          <TextField label="E-mail" name="email" type="email" />
          <TextField label="Senha" name="password" type="password" />
          <Button type="submit" variant="contained" color="primary" size="large">
            Cadastrar
          </Button>
        </form>
      </FormProvider>
      <Notification closeNotification={closeNotification} {...notification} />
    </main>
  );
}
