import { formatDate } from '@/app/home/utils/functions';
import { OccurrenceType } from '@/app/home/utils/types';

export const formatOccurrenceData = (data: OccurrenceType): OccurrenceType => {
  return {
    ...data,
    createdAt: formatDate(data.createdAt),
  };
};
