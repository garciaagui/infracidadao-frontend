import { OccurrenceType, TableDataType } from './types';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Os meses começam em zero, então somamos 1
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const sortApiDataByCreationDate = (data: OccurrenceType[]) => {
  return data.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    return (dateA - dateB) * -1; // Ordem: do mais novo para o mais velho
  });
};

export const formatTableData = (data: OccurrenceType[]): TableDataType[] => {
  return data.map(({ id, title, neighborhood, street, status, createdAt }) => ({
    id,
    title,
    neighborhood,
    street,
    status,
    createdAt: formatDate(createdAt),
  }));
};
