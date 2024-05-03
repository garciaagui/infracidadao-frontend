import { OccurrenceType, TableDataType } from "./types";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Os meses começam em zero, então somamos 1
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatTableData = (data: OccurrenceType[]): TableDataType[] => {
  return data.map(({ title, neighborhood, street, status, createdAt }) => ({
    title,
    neighborhood,
    street,
    status,
    createdAt: formatDate(createdAt),
  }));
};
