import { CreateOccurrenceType } from './types';

export const generateFormData = (occurrenceData: CreateOccurrenceType, userId: string) => {
  const formData = new FormData();

  formData.set('title', occurrenceData.title);
  formData.set('description', occurrenceData.description);
  formData.set('neighborhood', occurrenceData.neighborhood);
  formData.set('street', occurrenceData.street);
  formData.set('image', occurrenceData.image[0]);
  formData.set('userId', userId);

  if (occurrenceData.reference) {
    formData.set('reference', occurrenceData.reference);
  }

  return formData;
};
