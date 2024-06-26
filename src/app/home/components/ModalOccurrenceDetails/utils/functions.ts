import { formatDate } from '@/app/home/utils/functions';
import { OccurrenceReplyType, OccurrenceType } from '@/app/home/utils/types';
import { CreateReplyType } from './types';

const formatRepliesDates = (data: OccurrenceReplyType[]) => {
  return data.map((item) => {
    return {
      ...item,
      createdAt: formatDate(item.createdAt),
    };
  });
};

export const formatOccurrenceData = (data: OccurrenceType): OccurrenceType => {
  return {
    ...data,
    createdAt: formatDate(data.createdAt),
    occurrenceReplies: formatRepliesDates(data.occurrenceReplies),
  };
};

export const generateReplyFormData = (data: CreateReplyType): FormData => {
  const formData = new FormData();

  formData.set('description', data.description);
  formData.set('occurrenceId', String(data.occurrenceId));
  formData.set('occurrenceStatus', String(data.occurrenceStatus));
  formData.set('userId', String(data.userId));

  if (data.imageUrl[0]) {
    formData.set('imageUrl', data.imageUrl[0]);
  }

  return formData;
};
