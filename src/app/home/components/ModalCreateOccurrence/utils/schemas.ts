import { z } from 'zod';

export const createOccurrenceSchema = z.object({
  title: z
    .string()
    .min(10, {
      message: 'O título precisa ter no mínimo 10 caracteres',
    })
    .max(127, {
      message: 'O título pode ter no máximo 127 caracteres',
    })
    .toLowerCase(),
  description: z
    .string()
    .min(40, {
      message: 'A descrição precisa ter no mínimo 40 caracteres',
    })
    .max(255, {
      message: 'A descrição pode ter no máximo 255 caracteres',
    })
    .toLowerCase(),
  neighborhood: z
    .string()
    .min(1, {
      message: 'Insira o bairro',
    })
    .toLowerCase(),
  street: z
    .string()
    .min(1, {
      message: 'Insira a rua',
    })
    .toLowerCase(),
  reference: z.string().toLowerCase(),
  image: z
    .any({ required_error: 'Selecione uma imagem' })
    .refine((files) => !!files.item(0), 'Selecione uma imagem')
    .transform((files) => {
      return files?.item(0);
    }),
});
