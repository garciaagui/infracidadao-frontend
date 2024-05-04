"use client";

import { TextField } from "@/components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { loginSchema } from "./utils/schemas";
import { LoginType } from "./utils/types";

export default function Login() {
  const loginForm = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const { handleSubmit } = loginForm;

  const login = () => {
    console.log("Teste de login");
  };

  return (
    <main>
      <h1>Login</h1>
      <FormProvider {...loginForm}>
        <form onSubmit={handleSubmit(login)}>
          <TextField label="E-mail" name="email" type="email" />
          <TextField label="Senha" name="password" type="password" />
          <button type="submit">Entrar</button>
        </form>
      </FormProvider>
    </main>
  );
}
