import { formatDate } from '@/app/home/utils/functions';
import { OccurrenceType } from '@/app/home/utils/types';

export const formatModalData = (data: OccurrenceType): OccurrenceType => {
  return {
    ...data,
    createdAt: formatDate(data.createdAt),
  };
};
