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

  console.log(replyData.imageUrl);
  console.log(replyData.imageUrl[0]);

  if (replyData.imageUrl) {
    formData.set('imageUrl', replyData.imageUrl[0]);
  }

  return formData;
};
