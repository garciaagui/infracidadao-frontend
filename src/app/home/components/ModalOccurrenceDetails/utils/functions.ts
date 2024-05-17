import { formatDate } from '@/app/home/utils/functions';
import { OccurrenceType } from '@/app/home/utils/types';
import { CreateReplyType } from './types';

export const formatOccurrenceData = (data: OccurrenceType): OccurrenceType => {
  return {
    ...data,
    createdAt: formatDate(data.createdAt),
  };
};

export const generateReplyFormData = (
  replyData: CreateReplyType,
  occurrenceId: number,
  userId: number,
): FormData => {
  const formData = new FormData();

  formData.set('description', replyData.description);
  formData.set('occurrenceId', String(occurrenceId));
  formData.set('userId', String(userId));

  if (replyData.imageUrl[0]) {
    formData.set('imageUrl', replyData.imageUrl[0]);
  }

  return formData;
};
