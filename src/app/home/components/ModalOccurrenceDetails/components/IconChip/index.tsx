import { Chip, ChipProps } from '@mui/material';
import { ReactElement } from 'react';

type IconChipProps = Omit<ChipProps, 'icon'> & {
  icon: ReactElement;
  label: string | number;
};

export default function IconChip({ icon, label }: IconChipProps) {
  return <Chip icon={icon} label={label} size="medium" variant="outlined" />;
}
