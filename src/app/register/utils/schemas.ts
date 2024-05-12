import { z } from 'zod';

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'O e-mail é obrigatório',
    })
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase(),
  password: z
    .string()
    .min(1, {
      message: 'A senha é obrigatória',
    })
    .min(8, {
      message: 'A senha precisa ter no mínimo 8 caracteres',
    }),
});
