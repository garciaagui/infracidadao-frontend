import { ListItemText } from '@mui/material';

type ListItemProps = {
  primary: string;
  secondary: string;
};

export default function ListItem({ primary, secondary }: ListItemProps) {
  return (
    <ListItemText
      primary={primary}
      secondary={secondary}
      primaryTypographyProps={{ fontSize: '1.1rem' }}
      secondaryTypographyProps={{ fontSize: '1rem' }}
    />
  );
}
