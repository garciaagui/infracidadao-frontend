import { z } from 'zod';
import { loginSchema } from './schemas';

export type LoginType = z.infer<typeof loginSchema>;
