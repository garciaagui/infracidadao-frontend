import { CreateOccurrenceType } from './types';

export const generateFormData = (
  occurrenceData: CreateOccurrenceType,
  userId: string,
): FormData => {
  const formData = new FormData();

  formData.set('title', occurrenceData.title);
  formData.set('description', occurrenceData.description);
  formData.set('street', occurrenceData.street);
  formData.set('neighborhood', occurrenceData.neighborhood);
  formData.set('zipCode', occurrenceData.zipCode);
  formData.set('image', occurrenceData.image[0]);
  formData.set('userId', userId);

  if (occurrenceData.reference) {
    formData.set('reference', occurrenceData.reference);
  }

  return formData;
};

const zipCodeMask = (value: string): string => {
  if (!value) return '';
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1-$2');
  return value;
};

export const handleZipCodeValue = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
): void => {
  const input = event.target;
  input.value = zipCodeMask(input.value);
};
