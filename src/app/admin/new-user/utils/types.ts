import { z } from 'zod';
import { adminNewUserSchema } from './schemas';

export type AdminNewUserFormType = z.infer<typeof adminNewUserSchema>;
