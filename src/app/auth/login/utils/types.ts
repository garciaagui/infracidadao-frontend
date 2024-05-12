import { z } from 'zod';
import { loginSchema } from './schemas';

export type LoginType = z.infer<typeof loginSchema>;

type SeverityType = 'success' | 'error' | 'warning';

export type NotificationType = {
  isOpen: boolean;
  message: string;
  severity: SeverityType;
};
