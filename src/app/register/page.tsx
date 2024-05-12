import { TextField } from '@/components/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { registerSchema } from './utils/schemas';
import { RegisterType } from './utils/types';

export default function Register() {
  const router = useRouter();
  const registerForm = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit } = registerForm;

  const register = () => {
    console.log('Registro');
  };

  return (
    <main>
      <h1>Cadastro de usuários</h1>
      <FormProvider {...registerForm}>
        <form onSubmit={handleSubmit(register)} noValidate>
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
