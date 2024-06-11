import { z } from 'zod';
import { registerSchema } from './schemas';

export type RegisterFormType = z.infer<typeof registerSchema>;
