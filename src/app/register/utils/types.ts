import { z } from 'zod';
import { registerSchema } from './schemas';

export type RegisterType = z.infer<typeof registerSchema>;
