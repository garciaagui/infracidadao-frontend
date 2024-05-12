'use client';

import { TextField } from '@/components/Form';
import { requestUserCreation } from '@/services/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { registerSchema } from './utils/schemas';
import { RegisterType } from './utils/types';

export default function Register() {
  const router = useRouter();
  const registerForm = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit } = registerForm;

  const register = async (data: RegisterType) => {
    try {
      await requestUserCreation(data);
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      router.push('/home');
    } catch (error) {
      console.log(error);
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
    </main>
  );
}
