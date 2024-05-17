import { z } from 'zod';

export const createReplySchema = z.object({
  description: z
    .string()
    .min(40, {
      message: 'A descrição precisa ter no mínimo 40 caracteres',
    })
    .max(255, {
      message: 'A descrição pode ter no máximo 255 caracteres',
    })
    .toLowerCase(),
  imageUrl: z
    .any()
    .refine((files) => !files || !!files.item(0), 'Selecione uma imagem') // Permite null ou undefined
    .transform((files) => {
      return files?.item(0);
    })
    .optional(),
});
